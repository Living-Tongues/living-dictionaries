/* eslint-disable test/no-disabled-tests */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import type { Row } from './row.type'
import { parseCSVFrom } from './parse-csv.js'

const import_id = `v4-1715819006966`

describe.skip('convertJsonRowToEntryFormat without senses', () => {
  test('glosses', () => {
    const csv_rows_without_header: Row[] = [
      {
        'lexeme': 'dolphin',
        'localOrthography.2': 'different script of dolphin',
        'es_gloss': 'delfín',
      },
    ]
    const entries = csv_rows_without_header.map(row => convert_row_to_objects_for_databases({ row, import_id }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "es": "delfín",
            },
            "ii": "v4-1715819006966",
            "lo2": "different script of dolphin",
            "lx": "dolphin",
            "ua": 10101010,
          },
          "supabase_senses": [],
          "supabase_sentences": [],
        },
      ]
    `)
  })

  test('example sentences', () => {
    const csv_rows_without_header: Row[] = [
      {
        lexeme: 'dolphin',
        es_exampleSentence: 'el delfín nada en el océano.',
      },
    ]
    const entries = csv_rows_without_header.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {},
            "ii": "v4-1715819006966",
            "lx": "dolphin",
            "ua": 10101010,
            "xs": {
              "es": "el delfín nada en el océano.",
            },
          },
          "supabase_senses": [],
          "supabase_sentences": [],
        },
      ]
    `)
  })

  test('semantic domains', () => {
    const csv_rows_without_header: Row[] = [
      {
        'lexeme': 'dolphins',
        'semanticDomain': '5.15',
        'semanticDomain.2': '1',
        'semanticDomain_custom': 'the sea!',
      },
    ]
    const entries = csv_rows_without_header.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {},
            "ii": "v4-1715819006966",
            "lx": "dolphins",
            "sd": [
              "the sea!",
            ],
            "sdn": [
              "5.15",
              "1",
            ],
            "ua": 10101010,
          },
          "supabase_senses": [],
          "supabase_sentences": [],
        },
      ]
    `)
  })

  test('high-level conversion from csv', () => {
    const dictionaryId = 'example-v4'
    const file = readFileSync(path.join(__dirname, `./data/${dictionaryId}/${dictionaryId}.csv`), 'utf8')
    const rows = parseCSVFrom(file)
    const rowsWithoutHeader = removeHeaderRow(rows)
    const entries = rowsWithoutHeader.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp }))

    expect(entries).toEqual(
      [
        {
          firebase_entry: {
            ca: 10101010,
            di: [
              'Modern Parisian French',
            ],
            gl: {
              en: 'car',
              es: 'auto',
            },
            ii: 'v4-1715819006966',
            lx: 'voiture',
            nt: 'small automobile',
            ph: 'vwatyʁ',
            ps: [
              'n',
              'v',
            ],
            sd: [
              'vehicle|cars',
            ],
            sdn: [
              '5.15',
              '5',
            ],
            ua: 10101010,
            xs: {
              en: 'I drive my car',
              es: 'Conduzco mi auto',
              vn: 'Je conduis ma voiture',
            },
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
        {
          firebase_entry: {
            ca: 10101010,
            di: [
              'Modern Parisian French',
              'Quebec French',
            ],
            gl: {
              en: 'tree',
              es: 'árbol',
            },
            ii: 'v4-1715819006966',
            lx: 'arbre',
            nt: 'generic term for all kinds of trees',
            ph: 'aʁbʁ',
            ps: [
              'n',
              'adj',
            ],
            scn: [
              'Acer rubrum',
            ],
            sdn: [
              '1.4',
              '1.2',
            ],
            ua: 10101010,
            xs: {
              en: 'The tree gives us shade',
              es: 'El árbol nos da sombra',
              vn: 'L\'arbre nous donne de l\'ombre',
            },
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
        {
          firebase_entry: {
            ca: 10101010,
            di: [
              'Modern Parisian French',
            ],
            gl: {
              en: 'tube',
              es: 'tubo',
            },
            ii: 'v4-1715819006966',
            lx: 'tube',
            nt: 'a cylindrical device for liquids',
            ph: 'tyb',
            pl: 'tubes',
            ps: [
              'n',
            ],
            sd: [
              'plumbing',
            ],
            sdn: [
              '5.9',
            ],
            ua: 10101010,
            xs: {
              en: 'The water goes through the tubes',
              es: 'El agua pasa a través de los tubos',
              vn: 'L\'eau passe à travers les tubes',
            },
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
        {
          firebase_entry: {
            ca: 10101010,
            di: [
              'Quebec French',
            ],
            gl: {
              en: 'car',
              es: 'auto',
            },
            ii: 'v4-1715819006966',
            lx: 'voiture',
            nt: 'small automobile',
            ph: 'vwɑtYʁ',
            ps: [
              'n',
            ],
            sd: [
              'vehicle',
            ],
            sdn: [
              '5.15',
            ],
            sr: [
              'testing sources',
            ],
            ua: 10101010,
            xs: {
              en: 'I drive my car',
              es: 'Conduzco mi auto',
              vn: 'Je conduis ma voiture',
            },
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
        {
          firebase_entry: {
            ca: 10101010,
            di: [
              'Quebec French',
            ],
            gl: {
              en: 'neutral',
              es: 'neutro',
            },
            ii: 'v4-1715819006966',
            lx: 'neutre',
            ph: 'nøʏ̯tʁ̥',
            ps: [
              'adj',
            ],
            ua: 10101010,
            xs: {
              en: 'My room is painted with a neutral color.',
              es: 'Mi habitación está pintada con un color neutro.',
              vn: 'Ma chambre est peinte d\'une couleur neutre.',
            },
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
        {
          firebase_entry: {
            ca: 10101010,
            di: [
              'Quebec French',
            ],
            gl: {
              en: 'to celebrate',
              es: 'celebrar',
            },
            ii: 'v4-1715819006966',
            lx: 'fêter',
            nt: 'to have a party',
            ph: 'fɛɪ̯te',
            ps: [
              'v',
            ],
            sr: [
              'test source',
              'with multiples sources, test',
              'https://example.com',
            ],
            ua: 10101010,
            xs: {
              en: 'We will really party tonight',
              es: 'Vamos a celebrar esta noche',
              vn: 'On va vraiment fêter à soir',
            },
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
        {
          firebase_entry: {
            ca: 10101010,
            di: [
              'Central Luganda',
            ],
            gl: {
              en: 'I will see you',
              es: 'Voy a verte',
            },
            ii: 'v4-1715819006966',
            in: '1SG-Fut-2SG-see-Fin.V',
            lx: 'njakulaba',
            mr: 'n-ja-ku-lab-a',
            ps: [
              'vp',
            ],
            ua: 10101010,
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
        {
          firebase_entry: {
            ca: 10101010,
            gl: {
              en: 'bye',
              es: 'adiós',
            },
            ii: 'v4-1715819006966',
            lx: 'vale',
            ua: 10101010,
          },
          supabase_senses: [],
          supabase_sentences: [],
        },
      ],
    )
  })

  test('does not duplicate vernacular', () => {
    const csv_rows_without_header: Row[] = [
      {
        vernacular_exampleSentence: 'Hello world',
      },
    ]
    const entries = csv_rows_without_header.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {},
            "ii": "v4-1715819006966",
            "lx": undefined,
            "ua": 10101010,
            "xs": {
              "vn": "Hello world",
            },
          },
          "supabase_senses": [],
          "supabase_sentences": [],
        },
      ]
    `)
  })
})

describe.skip('convertJsonRowToEntryFormat with senses', () => {
  const fakeTimeStamp = 10101010 as unknown as Timestamp
  const fakeDateStamp = 1715819006966

  test('multiple senses (glosses))', () => {
    const csv_rows_with_senses: Row[] = [
      {
        'lexeme': '𒄧𒂸',
        'es_gloss': 'delfín',
        'en_gloss': 'dolphin',
        's2.es_gloss': 'pez',
        's2.en_gloss': 'fish',
        's3.en_gloss': 'marine mammal',
        's4.en_gloss': 'mythological creature',
        's4.es_gloss': 'creatura mitológica',
        's4.fr_gloss': 'créature mythologique',
      },
    ]
    const entries = csv_rows_with_senses.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp, test: true }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "en": "dolphin",
              "es": "delfín",
            },
            "ii": "v4-1715819006966",
            "lx": "𒄧𒂸",
            "ua": 10101010,
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "fish",
                    "es": "pez",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "marine mammal",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "mythological creature",
                    "es": "creatura mitológica",
                    "fr": "créature mythologique",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111103",
            },
          ],
          "supabase_sentences": [],
        },
      ]
    `)
  })

  test('senses with sentences', () => {
    const csv_rows_with_sentences: Row[] = [
      {
        'lexeme': '𒄧𒂸',
        'en_gloss': 'dolphin',
        's2.en_gloss': 'fish',
        's2.default_vernacular_exampleSentence': '𒄧𒂸 𒄧 𒄧𒂸 𒂸𒂸𒄧',
        's2.en_exampleSentence': 'The fish is swimmmimg',
        's2.es_exampleSentence': 'El pez está nadando',
      },
    ]
    const entries = csv_rows_with_sentences.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp, test: true }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "en": "dolphin",
            },
            "ii": "v4-1715819006966",
            "lx": "𒄧𒂸",
            "ua": 10101010,
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "fish",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒄧𒂸 𒄧 𒄧𒂸 𒂸𒂸𒄧",
                  },
                },
                "translation": {
                  "new": {
                    "en": "The fish is swimmmimg",
                    "es": "El pez está nadando",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
          ],
        },
      ]
    `)
  })

  test('senses with the rest fields', () => {
    const csv_rows_with_other_fields: Row[] = [
      {
        'lexeme': 'foo',
        'en_gloss': 'test',
        's2.en_gloss': 'example',
        's2.partOfSpeech': 'n',
        's2.semanticDomain': '1.1',
        's2.nounClass': 'S',
      },
    ]
    const entries = csv_rows_with_other_fields.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp, test: true }))
    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "en": "test",
            },
            "ii": "v4-1715819006966",
            "lx": "foo",
            "ua": 10101010,
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "example",
                  },
                },
                "noun_class": {
                  "new": "S",
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
                "semantic_domains": {
                  "new": [
                    "1.1",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
          ],
          "supabase_sentences": [],
        },
      ]
    `)
  })

  test('wrong order in senses', () => {
    const csv_rows_with_senses: Row[] = [
      {
        'lexeme': '𒂸',
        'es_gloss': 'sopa',
        'en_gloss': 'soup',
        's2.es_gloss': 'agua',
        's3.es_gloss': 'líquido',
        's3.en_gloss': 'liquid',
        's2.en_gloss': 'water',
      },
    ]
    const entries = csv_rows_with_senses.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp, test: true }))

    expect(entries).not.toEqual(
      [
        {
          firebase_entry: {
            ca: 10101010,
            gl: {
              en: 'soup',
              es: 'sopa',
            },
            ii: 'v4-1715819006966',
            lx: '𒂸',
            ua: 10101010,
          },
          supabase_senses: [
            {
              sense: {
                glosses: {
                  new: {
                    es: 'agua',
                    en: 'water',
                  },
                },
              },
              sense_id: '11111111-1111-1111-1111-111111111100',
            },
            {
              sense: {
                glosses: {
                  new: {
                    en: 'liquid',
                    es: 'líquido',
                  },
                },
              },
              sense_id: '11111111-1111-1111-1111-111111111102',
            },
          ],
          supabase_sentences: [],
        },
      ],
    )
  })

  test('senses with multiple sentences and last vernacular sentence without its translations', () => {
    const csv_rows_with_sentences: Row[] = [
      {
        'lexeme': '𒄧𒂸',
        'en_gloss': 'dolphin',
        's2.en_gloss': 'fish',
        's2.default_vernacular_exampleSentence': '𒄧𒂸 𒄧 𒄧𒂸 𒂸𒂸𒄧',
        's2.en_exampleSentence': 'The fish is swimmming',
        's2.es_exampleSentence': 'El pez está nadando',
        's3.en_gloss': 'swim',
        's3.default_vernacular_exampleSentence': '𒂸𒂸𒄧',
        's3.en_exampleSentence': 'I swim',
        's4.en_gloss': 'test',
        's4.default_vernacular_exampleSentence': '𒂸𒂸 𒂸𒂸 𒂸𒂸',
      },
    ]
    const entries = csv_rows_with_sentences.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp, test: true }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "en": "dolphin",
            },
            "ii": "v4-1715819006966",
            "lx": "𒄧𒂸",
            "ua": 10101010,
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "fish",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "swim",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111103",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "test",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111105",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒄧𒂸 𒄧 𒄧𒂸 𒂸𒂸𒄧",
                  },
                },
                "translation": {
                  "new": {
                    "en": "The fish is swimmming",
                    "es": "El pez está nadando",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111103",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒂸𒂸𒄧",
                  },
                },
                "translation": {
                  "new": {
                    "en": "I swim",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111104",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111105",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒂸𒂸 𒂸𒂸 𒂸𒂸",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111106",
            },
          ],
        },
      ]
    `)
  })
  test('multiple vernacular and translations sentences that belongs to a same sense', () => {
    const csv_rows_with_sentences: Row[] = [
      {
        'lexeme': '𒄧𒂸',
        'en_gloss': 'dolphin',
        's2.en_gloss': 'fish',
        's2.default_vernacular_exampleSentence': '𒄧𒂸 𒄧 𒄧𒂸 𒂸𒂸𒄧',
        's2.en_exampleSentence': 'The fish is swimmming',
        's2.es_exampleSentence': 'El pez está nadando',
        's2.default_vernacular_exampleSentence.2': '𒂸 𒂸𒂸𒂸 𒄧𒄧𒄧 𒄧',
        's3.en_gloss': 'swim',
        's3.default_vernacular_exampleSentence': '𒂸𒂸𒄧',
        's3.en_exampleSentence': 'I swim',
        's3.default_vernacular_exampleSentence.2': '𒄧𒂸 𒂸𒄧',
        's3.en_exampleSentence.2': 'He swam',
        's3.es_exampleSentence.2': 'Él nadó',
        's3.it_exampleSentence.2': 'egli nuotava',
        's3.default_vernacular_exampleSentence.3': '𒂸 𒄧𒄧 𒂸',
        's3.es_exampleSentence.3': 'Él nadará',
        's3.en_exampleSentence.3': 'He will swim',
        's4.en_gloss': 'test',
        's4.default_vernacular_exampleSentence': '𒂸𒂸 𒂸𒂸 𒂸𒂸',
      },
    ]
    const entries = csv_rows_with_sentences.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp, test: true }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "en": "dolphin",
            },
            "ii": "v4-1715819006966",
            "lx": "𒄧𒂸",
            "ua": 10101010,
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "fish",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "swim",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111104",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "en": "test",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111108",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒄧𒂸 𒄧 𒄧𒂸 𒂸𒂸𒄧",
                  },
                },
                "translation": {
                  "new": {
                    "en": "The fish is swimmming",
                    "es": "El pez está nadando",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒂸 𒂸𒂸𒂸 𒄧𒄧𒄧 𒄧",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111103",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111104",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒂸𒂸𒄧",
                  },
                },
                "translation": {
                  "new": {
                    "en": "I swim",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111105",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111104",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒄧𒂸 𒂸𒄧",
                  },
                },
                "translation": {
                  "new": {
                    "en": "He swam",
                    "es": "Él nadó",
                    "it": "egli nuotava",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111106",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111104",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒂸 𒄧𒄧 𒂸",
                  },
                },
                "translation": {
                  "new": {
                    "en": "He will swim",
                    "es": "Él nadará",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111107",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111108",
              "sentence": {
                "text": {
                  "new": {
                    "default": "𒂸𒂸 𒂸𒂸 𒂸𒂸",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111109",
            },
          ],
        },
      ]
    `)
  })

  test('high-level conversion from csv with senses', () => {
    const dictionaryId = 'example-v4-senses'
    const file = readFileSync(path.join(__dirname, `./data/${dictionaryId}/${dictionaryId}.csv`), 'utf8')
    const rows = parseCSVFrom(file)
    const entries = rows.map(row => convert_row_to_objects_for_databases({ row, import_id, timestamp: fakeTimeStamp, test: true }))

    expect(entries).toMatchInlineSnapshot(`
      [
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "es": "sol",
            },
            "ii": "v4-1715819006966",
            "lx": "kꞌahkꞌal",
            "nt": "16/jul./2019. Bachajon",
            "ps": [
              "n",
            ],
            "ua": 10101010,
            "va": "kꞌajkꞌal",
            "xs": {
              "es": "Ya salió el sol",
              "vn": "Lokꞌix tal kꞌahkꞌal",
            },
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "fiebre",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "día",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111103",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "calor",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111106",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Ay ta kꞌahkꞌal te chꞌin alale",
                  },
                },
                "translation": {
                  "new": {
                    "es": "El niño tiene fiebre",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111103",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Cheb kꞌahkꞌal ya x-aꞌtejotik",
                  },
                },
                "translation": {
                  "new": {
                    "es": "Trabajaremos dos días",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111105",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111106",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Toyol kꞌahkꞌal ya kaꞌiy",
                  },
                },
                "translation": {
                  "new": {
                    "es": "Siento mucho calor",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111108",
            },
          ],
        },
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "es": "sol",
            },
            "ii": "v4-1715819006966",
            "lx": "kꞌaal",
            "nt": "26/dic./2020",
            "ps": [
              "n",
            ],
            "ua": 10101010,
            "va": "kꞌahkꞌal",
            "xs": {
              "es": "Que bueno, ya salió el sol",
              "vn": "Jaꞌnix lek-a lokꞌix tel kꞌaal",
            },
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "fiebre",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "día",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111103",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "calor",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111106",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Ay bayal skꞌaal te chꞌin x-Ixchele",
                  },
                },
                "translation": {
                  "new": {
                    "es": "Mi hijita Ixchel tiene mucha fiebre",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111103",
              "sentence": {
                "text": {
                  "new": {
                    "default": ""Bajtꞌix kꞌaal mamtik, yorailix ichꞌ lewa"",
                  },
                },
                "translation": {
                  "new": {
                    "es": "Ya transcurrió el día mi estimado señor, es momento de tomar un descanso",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111105",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111106",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Toyol kꞌaal ya jkaꞌiy",
                  },
                },
                "translation": {
                  "new": {
                    "es": "Siento mucho calor",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111108",
            },
          ],
        },
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "es": "sol",
            },
            "ii": "v4-1715819006966",
            "lx": "kꞌajkꞌal",
            "nt": "14/dic./2019",
            "ps": [
              "n",
            ],
            "ua": 10101010,
            "va": "kꞌahkꞌal",
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "día",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "calor",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "fiebre",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111103",
            },
          ],
          "supabase_sentences": [],
        },
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "es": "fuego",
            },
            "ii": "v4-1715819006966",
            "lx": "kꞌajkꞌ",
            "nt": "23/sep./2023",
            "ps": [
              "n",
            ],
            "ua": 10101010,
            "va": "kꞌahkꞌ",
            "xs": {
              "es": "Ya hice el fuego",
              "vn": "Tilix kuꞌun-i kꞌajkꞌi",
            },
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "bravo",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "adj",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "fiebre",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111103",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "caliente",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "adj",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111106",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Lom kꞌajkꞌ te mamal jkaxlane",
                  },
                },
                "translation": {
                  "new": {
                    "es": "El mestizo es muy bravo",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111103",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Tsakbil ta kꞌajkꞌ te alale",
                  },
                },
                "translation": {
                  "new": {
                    "es": "El bebé tiene mucha fiebre",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111105",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111106",
              "sentence": {
                "text": {
                  "new": {
                    "default": "El café está caliente, tómalo despacio",
                  },
                },
                "translation": {
                  "new": {
                    "es": "Kꞌajkꞌ te kajpele, kꞌume xa awuchꞌ",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111108",
            },
          ],
        },
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "es": "libro",
            },
            "ii": "v4-1715819006966",
            "lx": "jun",
            "nt": "26/sep./2023",
            "ps": [
              "n",
            ],
            "ua": 10101010,
            "xs": {
              "es": "¿Qué haces? - Estoy leyendo un libro",
              "vn": "¿Beluk apas? - Yakalon ta skꞌoponel jun",
            },
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "cuaderno",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "documento",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111103",
            },
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "papel",
                  },
                },
                "parts_of_speech": {
                  "new": [
                    "n",
                  ],
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111106",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "La jta ta kitsel te june",
                  },
                },
                "translation": {
                  "new": {
                    "es": "Alcancé a rayar mi cuaderno",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111103",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Maꞌme xa awochꞌ te ajune",
                  },
                },
                "translation": {
                  "new": {
                    "es": "No vayas a arrugar tu documento",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111105",
            },
            {
              "sense_id": "11111111-1111-1111-1111-111111111106",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Zoe rompió el papel",
                  },
                },
                "translation": {
                  "new": {
                    "es": "La schꞌiꞌ jun te Zoe",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111108",
            },
          ],
        },
        {
          "firebase_entry": {
            "ca": 10101010,
            "gl": {
              "es": "abierto",
            },
            "ii": "v4-1715819006966",
            "lx": "jeꞌel",
            "nt": "08/abr./2019",
            "ps": [
              "adj",
            ],
            "ua": 10101010,
            "va": "makal",
            "xs": {
              "es": "La puerta de mi casa quedó abierta",
              "vn": "Jeꞌel jilel stiꞌ jna",
            },
          },
          "supabase_senses": [
            {
              "sense": {
                "glosses": {
                  "new": {
                    "es": "abrir",
                  },
                },
              },
              "sense_id": "11111111-1111-1111-1111-111111111100",
            },
          ],
          "supabase_sentences": [
            {
              "sense_id": "11111111-1111-1111-1111-111111111100",
              "sentence": {
                "text": {
                  "new": {
                    "default": "Jeꞌa tel tebuk i tiꞌnai ay bayal kꞌaal",
                  },
                },
                "translation": {
                  "new": {
                    "es": ""Abre un poco la puerta, hace mucho calor"",
                  },
                },
              },
              "sentence_id": "11111111-1111-1111-1111-111111111102",
            },
          ],
        },
      ]
    `)
  })
})

function removeHeaderRow(rows: Row[]) {
  return rows.splice(1)
}
