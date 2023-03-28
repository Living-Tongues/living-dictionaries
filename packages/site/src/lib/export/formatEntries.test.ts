import type {
  IDictionary,
  IEntry,
  IPartOfSpeech,
  ISemanticDomain,
  ISpeaker,
} from '@living-dictionaries/types';
import { formatEntriesForCSV, get_max_sdn } from './formatEntries';
import { convert_entry_to_current_shape } from '$lib/transformers/convert_entry_to_current_shape';

describe('get_max_sdn', () => {
  test('gets the max number of semantic domains in all senses and entries', () => {
    const entries: IEntry[] = [
      {
        sn: [{ sdn: ['1'] }],
      },
      {
        sn: [{ sdn: ['1', '2', '3'] }],
      },
      {
        sn: [{ sdn: ['1', '2'] }, { sdn: ['1', '2', '3', '4'] }],
      },
    ];
    expect(get_max_sdn(entries)).toEqual(4);
  });
  test('gets the max number of empty senses', () => {
    const entries: IEntry[] = [
      {
        sn: [],
      },
    ];
    expect(get_max_sdn(entries)).toEqual(-Infinity);
  });
});

test('formatEntriesForCSV basic example to smoke test', () => {
  const entriesArray: IEntry[] = [
    {
      id: '12345qwerty',
      lx: 'xiangjiao',
      lo: 'کیلا',
      in: 'n',
      mr: 'bar',
      nc: '5',
      ph: 'xiangjiao',
      gl: { es: 'platano', ar: 'foo', en: 'banana' },
      ps: 'n',
      pl: 'shuang xiangjiao',
      sdn: ['2.1', '2.2', '2.3'],
      di: 'dialect x',
      nt: 'This is an example of a note, here we can write whatever we want.',
      sr: ['A book', 'www.mybook.com'],
      xs: { en: 'This is a banana', vn: '我很喜歡吃香蕉' },
      sf: { path: 'https://database.com/sound.mp3', sp: '123' },
      pf: { gcs: 'not_needed_here', path: 'https://database.com/image.mp3' },
      xv: '',
    },
    { id: '34qw', lx: 'tree', gl: { es: 'arbol' } },
  ];
  const dictionary: IDictionary = {
    name: 'TestLang',
    id: 'test',
    glossLanguages: ['ar', 'en'],
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
  const entries = entriesArray.map((entry) => convert_entry_to_current_shape(entry));
  expect(formatEntriesForCSV(entries, dictionary, speakers, semanticDomains, partsOfSpeech))
    .toMatchInlineSnapshot(`
      [
        {
          "di": "Dialect",
          "glar": "Arabic Gloss",
          "glen": "English Gloss",
          "id": "Entry Id",
          "in": "Interlinearization",
          "lx": "Lexeme/Word/Phrase",
          "mr": "Morphology",
          "nc": "Noun class",
          "nt": "Notes",
          "pfFriendlyName": "Image filename",
          "ph": "Phonetic (IPA)",
          "pl": "Plural form",
          "ps": "Part of Speech",
          "psab": "Part of Speech abbreviation",
          "sd1": "Semantic domain 1",
          "sd2": "Semantic domain 2",
          "sd3": "Semantic domain 3",
          "sfFriendlyName": "Audio filename",
          "sfbp": "Speaker birthplace",
          "sfde": "Speaker decade",
          "sfge": "Speaker gender",
          "sfsn": "Speaker name",
          "sr": "Source(s)",
          "xsar": "Example sentence in Arabic",
          "xsen": "Example sentence in English",
          "xsvn": "Example sentence in TestLang",
        },
        {
          "di": "dialect x",
          "glar": "foo",
          "glen": "banana",
          "id": "12345qwerty",
          "in": "n",
          "lx": "xiangjiao",
          "mr": "bar",
          "nc": "5",
          "nt": "This is an example of a note, here we can write whatever we want.",
          "pfFriendlyName": "12345qwerty_platano.mp3",
          "pfpa": "https://database.com/image.mp3",
          "ph": "xiangjiao",
          "pl": "shuang xiangjiao",
          "ps": "noun",
          "psab": "n",
          "sd1": "Plant Test Domain",
          "sd2": "",
          "sd3": "",
          "sfFriendlyName": "12345qwerty_platano.mp3",
          "sfbp": "Whoville",
          "sfde": "4",
          "sfge": "m",
          "sfpa": "https://database.com/sound.mp3",
          "sfsn": "John Smith",
          "sr": "A book | www.mybook.com",
          "xsar": undefined,
          "xsen": "This is a banana",
          "xsvn": "我很喜歡吃香蕉",
        },
        {
          "di": undefined,
          "glar": "",
          "glen": "",
          "id": "34qw",
          "in": undefined,
          "lx": "tree",
          "mr": undefined,
          "nc": undefined,
          "nt": "",
          "pfFriendlyName": "",
          "ph": undefined,
          "pl": undefined,
          "ps": "",
          "psab": "",
          "sd1": "",
          "sd2": "",
          "sd3": "",
          "sfFriendlyName": "",
          "sfbp": "",
          "sfde": "",
          "sfge": "",
          "sfsn": "",
          "sr": "",
          "xsar": undefined,
          "xsen": undefined,
          "xsvn": undefined,
        },
      ]
    `);
});
