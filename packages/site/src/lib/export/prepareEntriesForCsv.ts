import type {
  ExpandedEntry,
  IDictionary,
  IPartOfSpeech,
  ISemanticDomain,
  ISpeaker,
} from '@living-dictionaries/types';
import { stripHTMLTags } from './stripHTMLTags';
import {
  assign_local_orthographies_to_headers,
  assign_example_sentences_to_headers,
  assign_gloss_languages_to_headers,
  assign_semantic_domains_to_headers,
  count_maximum_semantic_domains_only_from_first_senses,
} from './assignHeadersForCsv';
import {
  find_part_of_speech,
  get_first_speaker_from_first_sound_file,
  display_speaker_gender,
  display_speaker_age_range,
  assign_local_orthographies_to_formatted_entry,
  assign_semantic_domains_to_formatted_entry,
  assign_gloss_languages_to_formatted_entry,
  assign_example_sentences_to_formatted_entry,
} from './assignFormattedEntryValuesForCsv';

enum StandardEntryCSVFields {
  id = 'Entry Id',
  lexeme = 'Lexeme/Word/Phrase',
  phonetic = 'Phonetic (IPA)',
  interlinearization = 'Interlinearization',
  noun_class = 'Noun class',
  morphology = 'Morphology',
  plural_form = 'Plural form',
  dialects = 'Dialects',
  notes = 'Notes',
  sources = 'Source(s)',
  parts_of_speech_abbreviation = 'Part of Speech abbreviation',
  parts_of_speech = 'Part of Speech',
  image_filename = 'Image filename',
  sound_filename = 'Audio filename',
  speaker_name = 'Speaker name',
  speaker_birthplace = 'Speaker birthplace',
  speaker_decade = 'Speaker decade',
  speaker_gender = 'Speaker gender',
}
export type EntryForCSVKeys = keyof typeof StandardEntryCSVFields;
type StandardEntryForCSV = {
  [key in EntryForCSVKeys]?: string;
};

export interface EntryForCSV extends StandardEntryForCSV {
  vernacular_example_sentence?: string;
  variant?: string; // optional for Babanki & Torwali
}

const dictionaries_with_variant = ['babanki', 'torwali'];

export function prepareEntriesForCsv(
  expanded_entries: ExpandedEntry[],
  dictionary: IDictionary,
  speakers: ISpeaker[],
  global_semantic_domains: ISemanticDomain[],
  parts_of_speech: IPartOfSpeech[]
): EntryForCSV[] {
  const max_semantic_domain_number =
    count_maximum_semantic_domains_only_from_first_senses(expanded_entries);
  const headers = {} as EntryForCSV;
  for (const key in StandardEntryCSVFields) {
    headers[key] = StandardEntryCSVFields[key];
  }
  // Begin dynamic headers
  assign_local_orthographies_to_headers(headers, dictionary.alternateOrthographies);
  assign_semantic_domains_to_headers(headers, max_semantic_domain_number);
  assign_gloss_languages_to_headers(headers, dictionary.glossLanguages);
  assign_example_sentences_to_headers(headers, dictionary.glossLanguages, dictionary.name);

  // Dictionary specific
  if (dictionaries_with_variant.includes(dictionary.id)) {
    headers['variant'] = 'Variant';
  }

  const formattedEntries: EntryForCSV[] = expanded_entries.map((entry) => {
    const formatted_entry = {
      id: entry.id || '',
      lexeme: entry.lexeme || '',
      phonetic: entry.phonetic || '',
      interlinearization: entry.interlinearization || '',
      noun_class: entry.senses?.[0]?.noun_class || '',
      morphology: entry.morphology || '',
      plural_form: entry.plural_form || '',
      dialects: entry.dialects?.[0] || '',
      notes: stripHTMLTags(entry.notes),
      sources: entry.sources?.join(' | ') || '', // some dictionaries (e.g. Kalanga) have sources that are strings and not arrays
      parts_of_speech_abbreviation: entry.senses?.[0]?.parts_of_speech?.[0] || '',
      parts_of_speech: find_part_of_speech(
        parts_of_speech,
        entry.senses?.[0]?.parts_of_speech?.[0]
      ),
      image_filename: entry.senses?.[0].photo_files?.[0].fb_storage_path || '',
      sound_filename: entry.sound_files?.[0].fb_storage_path || '',
    } as EntryForCSV;

    //Begin dynamic values
    const speaker = get_first_speaker_from_first_sound_file(entry, speakers);
    formatted_entry.speaker_name = speaker?.displayName || '';
    formatted_entry.speaker_birthplace = speaker?.birthplace || '';
    formatted_entry.speaker_decade = display_speaker_age_range(speaker?.decade);
    formatted_entry.speaker_gender = display_speaker_gender(speaker?.gender);

    assign_local_orthographies_to_formatted_entry({
      formatted_entry,
      headers,
      entry,
      alternate_orthographies: dictionary.alternateOrthographies,
    });

    assign_semantic_domains_to_formatted_entry({
      formatted_entry,
      entry,
      max_semantic_domain_number,
      global_semantic_domains,
    });

    assign_gloss_languages_to_formatted_entry({
      formatted_entry,
      entry,
      gloss_languages: dictionary.glossLanguages,
    });

    assign_example_sentences_to_formatted_entry({
      formatted_entry,
      entry,
      gloss_languages: dictionary.glossLanguages,
    });

    // Dictionary specific
    if (dictionaries_with_variant.includes(dictionary.id)) {
      formatted_entry.variant = entry.variant || '';
    }

    return formatted_entry;
  });
  return [headers, ...formattedEntries];
}
