import type {
  ExpandedEntry,
  IDictionary,
  ISpeaker,
  ISemanticDomain,
  IPartOfSpeech,
} from '@living-dictionaries/types';
import { prepareEntriesForCsv, type EntryForCSV } from './prepareEntriesForCsv';

describe('prepareEntriesForCsv', () => {
  const headerRow = {
    id: 'Entry Id',
    lexeme: 'Lexeme/Word/Phrase',
    phonetic: 'Phonetic (IPA)',
    interlinearization: 'Interlinearization',
    noun_class: 'Noun class',
    morphology: 'Morphology',
    plural_form: 'Plural form',
    dialects: 'Dialects',
    notes: 'Notes',
    sources: 'Source(s)',
    parts_of_speech_abbreviation: 'Part of Speech abbreviation',
    parts_of_speech: 'Part of Speech',
    sound_filename: 'Audio filename',
    speaker_name: 'Speaker name',
    speaker_birthplace: 'Speaker birthplace',
    speaker_decade: 'Speaker decade',
    speaker_gender: 'Speaker gender',
    image_filename: 'Image filename',
    // dynamic fields - you can use easier to read field names
    // glar: 'Arabic Gloss',
    // glen: 'English Gloss',
    // lo1: 'native-1',
    // lo2: 'native-2',
    // sd1: 'Semantic domain 1',
    // sd2: 'Semantic domain 2',
    // sd3: 'Semantic domain 3',
  };
  const dictionary: IDictionary = {
    name: 'TestLang',
    id: 'test',
    glossLanguages: ['ar', 'en'],
    alternateOrthographies: ['native-1', 'native-2'],
    entryCount: 0,
  };
  const speakers: ISpeaker[] = [
    {
      displayName: 'John Smith',
      id: '123',
      birthplace: 'Whoville',
      decade: 4,
      gender: 'm',
    },
  ];
  const semanticDomains: ISemanticDomain[] = [{ key: '2.1', name: 'Plant Test Domain' }];
  const partsOfSpeech: IPartOfSpeech[] = [{ enAbbrev: 'n', enName: 'noun' }];

  test('works', () => {
    const expanded_entries: ExpandedEntry[] = [
      {
        //local_orthography_1: 'foo',
        lexeme: 'foo',
        // 1) fill out a couple entries
      },
    ];
    const expected: EntryForCSV[] = [
      { ...headerRow },
      {
        // 2) then their expected form for the CSV
        lexeme: 'foo',
        phonetic: '',
        interlinearization: '',
        noun_class: '',
        morphology: '',
        plural_form: '',
        dialects: '',
        notes: '',
        sources: '',
        parts_of_speech_abbreviation: '',
        parts_of_speech: '',
        sound_filename: '',
        speaker_name: '',
        speaker_birthplace: '',
        speaker_decade: '',
        speaker_gender: '',
        image_filename: '',
      },
    ];
    expect(
      prepareEntriesForCsv(expanded_entries, dictionary, speakers, semanticDomains, partsOfSpeech)
    ).toEqual(expected);
  });
});

// 3) then go and make sure export/+page.svelte is happy
