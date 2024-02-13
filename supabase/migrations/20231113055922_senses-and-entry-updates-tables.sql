CREATE TABLE senses (
  id uuid unique primary key NOT NULL, -- generated on client so users can create a sense offline and keep editing it
  entry_id text NOT NULL, -- add REFERENCES entries (id) once Firestore data migrated
  glosses jsonb,
  parts_of_speech text[],
  semantic_domains text[],
  write_in_semantic_domains text[],
  noun_class character varying,
  "definition" jsonb, -- works the same as glosses
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  created_by text NOT NULL, -- TODO: add REFERENCES auth.users (id)
  updated_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_by text NOT NULL, -- TODO: add REFERENCES auth.users (id)
  deleted timestamp with time zone
);

ALTER TABLE senses ENABLE ROW LEVEL SECURITY;

CREATE VIEW entries_view AS
SELECT
  entry_id as id,
  jsonb_agg(
    jsonb_strip_nulls(
      jsonb_build_object(
        'id', id,
        'glosses', glosses,
        'parts_of_speech', parts_of_speech,
        'semantic_domains', semantic_domains,
        'write_in_semantic_domains', write_in_semantic_domains,
        'noun_class', noun_class,
        'definition', "definition"
      )
    )
    ORDER BY created_at
  ) AS senses
FROM senses
WHERE deleted IS NULL
GROUP BY entry_id;

CREATE TYPE entry_tables AS ENUM ('senses'); -- future: 'entry', 'audio', 'videos', 'photos',
CREATE TYPE entry_columns AS ENUM ('deleted', 'glosses', 'parts_of_speech', 'semantic_domains', 'write_in_semantic_domains', 'noun_class', 'definition');

CREATE TABLE entry_updates (
  id uuid unique primary key NOT NULL, -- generated by client via uuidv4 so it can be idempotent and they can send it multiple times without repeated effect in case of network issues
  user_id text NOT NULL, -- TODO: change to uuid, add REFERENCES auth.users (id), set this in a trigger
  dictionary_id text NOT NULL, -- add REFERENCES dictionaries (id) once Firestore data migrated
  entry_id text NOT NULL, -- add REFERENCES entries (id) once Firestore data migrated
  "timestamp" timestamp with time zone DEFAULT now() NOT NULL,
  "table" entry_tables NOT NULL,
  "row" text NOT NULL, -- initially just the sense id, but later also entry id, photo id, etc.
  "column" entry_columns NOT NULL, -- in future could be null if using an update to simply add a new relationship between already existing data and media, ie - a video that contains many entries
  new_value text,
  old_value text
);

ALTER TABLE entry_updates ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION apply_entry_updates()
RETURNS TRIGGER AS $$
DECLARE
  column_data_type regtype;
  -- id_data_type regtype; -- entry ids brought in from Firestore will be text and not uuid
BEGIN
  SELECT atttypid::regtype INTO column_data_type
  FROM pg_attribute
  WHERE attrelid = (SELECT oid FROM pg_class WHERE relname = NEW.table::text)
    AND attname = NEW.column::text;
  
  -- IF NEW.table = ANY(ARRAY['senses', 'photos']) THEN
  --   id_data_type := 'uuid';
  -- ELSE
  --   id_data_type := 'text';
  -- END IF;

  EXECUTE format(
    'INSERT INTO %I 
    (id, entry_id, %I, created_by, updated_by, created_at, updated_at) 
    VALUES ($1::uuid, $2, $3::%s, $4, $4, now(), now()) 
    ON CONFLICT (id) DO UPDATE 
    SET %I = $3::%s, updated_by = $4, updated_at = now()', 
    NEW.table, 
    NEW.column,
    column_data_type,
    NEW.column,
    column_data_type
  ) USING NEW.row, NEW.entry_id, NEW.new_value, NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_entry_updates
AFTER INSERT ON entry_updates
FOR EACH ROW
EXECUTE FUNCTION apply_entry_updates();