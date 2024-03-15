CREATE TYPE content_tables AS ENUM ('entries', 'senses', 'sentences', 'senses_in_sentences', 'texts', 'audio', 'video', 'photo', 'speakers', 'audio_speakers', 'video_speakers', 'sense_videos', 'sentence_videos', 'sense_photos', 'sentence_photos');

CREATE TABLE content_updates (
  id uuid unique primary key NOT NULL, -- generated by client via uuidv4 so it can be idempotent and they can send it multiple times without repeated effect in case of network issues
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users,
  dictionary_id text NOT NULL REFERENCES dictionaries,
  entry_id text REFERENCES entries,
  sense_id uuid REFERENCES senses,
  sentence_id uuid REFERENCES sentences,
  text_id uuid REFERENCES texts,
  audio_id uuid REFERENCES audio,
  video_id uuid REFERENCES videos,
  photo_id uuid REFERENCES photos,
  speaker_id uuid REFERENCES speakers,
  "table" content_tables NOT NULL,
  change jsonb NOT NULL, -- includes import_id
  "timestamp" timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE content_updates ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION set_created_by()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_by := OLD.created_by;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_created_by_trigger_dictionaries
BEFORE UPDATE ON dictionaries
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_entries
BEFORE UPDATE ON entries
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_senses
BEFORE UPDATE ON senses
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_texts
BEFORE UPDATE ON texts
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_sentences
BEFORE UPDATE ON sentences
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_photos
BEFORE UPDATE ON photos
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_audio
BEFORE UPDATE ON audio
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_videos
BEFORE UPDATE ON videos
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

CREATE TRIGGER set_created_by_trigger_speakers
BEFORE UPDATE ON speakers
FOR EACH ROW
EXECUTE FUNCTION set_created_by();

-- CREATE VIEW public.emails AS SELECT id, email, last_sign_in_at, created_at FROM auth.users;
-- REVOKE ALL ON public.users FROM anon, authenticated;