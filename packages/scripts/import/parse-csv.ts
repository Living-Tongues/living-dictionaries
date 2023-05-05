import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';

export function parseCSVFrom(file: string): Record<string, any>[] {
  return parse(file, {
    columns: true,
    skip_empty_lines: true,
  });
}

if (import.meta.vitest) {
  test('Ainu problem', async () => {
    const file = readFileSync('./import/data/ainu-test/ainu-test.csv', 'utf8');
    expect(parseCSVFrom(file)).toMatchInlineSnapshot(`
      [
        {
          "en_gloss": "foot",
          "lexeme": "ure",
          "source ": "Basic Ainu Words (a phrasebook from Wikitongues' Poly app)",
        },
        {
          "en_gloss": "sit down",
          "lexeme": "a",
          "source ": "Basic Ainu Words (a phrasebook from Wikitongues' Poly app)",
        },
        {
          "en_gloss": "stand up",
          "lexeme": "ash",
          "source ": "Basic Ainu Words (a phrasebook from Wikitongues' Poly app)",
        },
        {
          "en_gloss": "go to bed",
          "lexeme": "mokor",
          "source ": "Basic Ainu Words (a phrasebook from Wikitongues' Poly app)",
        },
      ]
    `);
  });

  test('parseCSV logs out example.csv as array', async () => {
    const file = readFileSync('./import/data/example-v4/example-v4.csv', 'utf8');
    expect(parseCSVFrom(file)).toMatchInlineSnapshot(`
      [
        {
          "": "",
          "dialect": "",
          "en_exampleSentence": "English",
          "en_gloss": "English",
          "es_exampleSentence": "Spanish",
          "es_gloss": "Spanish",
          "interlinearization": "",
          "lexeme": "(word/phrase)",
          "localOrthography": "",
          "morphology": "",
          "notes": "",
          "partOfSpeech": "abbrev.",
          "phonetic": "",
          "photoFile": "",
          "pluralForm": "",
          "scientificName": "",
          "semanticDomain": "key",
          "semanticDomain2": "key",
          "semanticDomain_custom": "(try not to use, separate multiples with a |)",
          "soundFile": "",
          "source": "",
          "speakerAge": "",
          "speakerGender": "",
          "speakerHometown": "",
          "speakerName": "",
          "vernacular_exampleSentence": "",
        },
        {
          "": "Daily life",
          "dialect": "Modern Parisian French",
          "en_exampleSentence": "I drive my car",
          "en_gloss": "car",
          "es_exampleSentence": "Conduzco mi auto",
          "es_gloss": "auto",
          "interlinearization": "",
          "lexeme": "voiture",
          "localOrthography": "",
          "morphology": "",
          "notes": "small automobile",
          "partOfSpeech": "n,v",
          "phonetic": "vwatyʁ",
          "photoFile": "mountain.jpg",
          "pluralForm": "",
          "scientificName": "",
          "semanticDomain": "5.15",
          "semanticDomain2": "5",
          "semanticDomain_custom": "vehicle|cars",
          "soundFile": "helloworld.mp3",
          "source": "",
          "speakerAge": "43",
          "speakerGender": "f",
          "speakerHometown": "Paris, France",
          "speakerName": "Celine Dorion",
          "vernacular_exampleSentence": "Je conduis ma voiture",
        },
        {
          "": "Earth, geology and landscape",
          "dialect": "Modern Parisian French",
          "en_exampleSentence": "The tree gives us shade",
          "en_gloss": "tree",
          "es_exampleSentence": "El árbol nos da sombra",
          "es_gloss": "árbol",
          "interlinearization": "",
          "lexeme": "arbre",
          "localOrthography": "",
          "morphology": "",
          "notes": "generic term for all kinds of trees",
          "partOfSpeech": "n, adj",
          "phonetic": "aʁbʁ",
          "photoFile": "",
          "pluralForm": "",
          "scientificName": "Acer rubrum",
          "semanticDomain": "1.4",
          "semanticDomain2": "1.2",
          "semanticDomain_custom": "",
          "soundFile": "missing.mp3",
          "source": "",
          "speakerAge": "43",
          "speakerGender": "f",
          "speakerHometown": "Paris, France",
          "speakerName": "Celine Dorion",
          "vernacular_exampleSentence": "L'arbre nous donne de l'ombre",
        },
        {
          "": "",
          "dialect": "Modern Parisian French",
          "en_exampleSentence": "The water goes through the tubes",
          "en_gloss": "tube",
          "es_exampleSentence": "El agua pasa a través de los tubos",
          "es_gloss": "tubo",
          "interlinearization": "",
          "lexeme": "tube",
          "localOrthography": "",
          "morphology": "",
          "notes": "a cylindrical device for liquids",
          "partOfSpeech": "n",
          "phonetic": "tyb",
          "photoFile": "missing.jpg",
          "pluralForm": "tubes",
          "scientificName": "",
          "semanticDomain": "5.9",
          "semanticDomain2": "",
          "semanticDomain_custom": "plumbing",
          "soundFile": "",
          "source": "",
          "speakerAge": "",
          "speakerGender": "",
          "speakerHometown": "",
          "speakerName": "",
          "vernacular_exampleSentence": "L'eau passe à travers les tubes",
        },
        {
          "": "",
          "dialect": "Quebec French",
          "en_exampleSentence": "I drive my car",
          "en_gloss": "car",
          "es_exampleSentence": "Conduzco mi auto",
          "es_gloss": "auto",
          "interlinearization": "",
          "lexeme": "voiture",
          "localOrthography": "",
          "morphology": "",
          "notes": "small automobile",
          "partOfSpeech": "n",
          "phonetic": "vwɑtYʁ",
          "photoFile": "",
          "pluralForm": "",
          "scientificName": "",
          "semanticDomain": "5.15",
          "semanticDomain2": "",
          "semanticDomain_custom": "vehicle",
          "soundFile": "",
          "source": "testing sources",
          "speakerAge": "",
          "speakerGender": "",
          "speakerHometown": "",
          "speakerName": "",
          "vernacular_exampleSentence": "Je conduis ma voiture",
        },
        {
          "": "",
          "dialect": "Quebec French",
          "en_exampleSentence": "My room is painted with a neutral color.",
          "en_gloss": "neutral",
          "es_exampleSentence": "Mi habitación está pintada con un color neutro.",
          "es_gloss": "neutro",
          "interlinearization": "",
          "lexeme": "neutre",
          "localOrthography": "",
          "morphology": "",
          "notes": "",
          "partOfSpeech": "adj",
          "phonetic": "nøʏ̯tʁ̥",
          "photoFile": "",
          "pluralForm": "",
          "scientificName": "",
          "semanticDomain": "",
          "semanticDomain2": "",
          "semanticDomain_custom": "",
          "soundFile": "0005-neutre.mp3",
          "source": "",
          "speakerAge": "31",
          "speakerGender": "m",
          "speakerHometown": "Montreal, Canada",
          "speakerName": "David Boucher",
          "vernacular_exampleSentence": "Ma chambre est peinte d'une couleur neutre.",
        },
        {
          "": "",
          "dialect": "Quebec French",
          "en_exampleSentence": "We will really party tonight",
          "en_gloss": "to celebrate",
          "es_exampleSentence": "Vamos a celebrar esta noche",
          "es_gloss": "celebrar",
          "interlinearization": "",
          "lexeme": "fêter",
          "localOrthography": "",
          "morphology": "",
          "notes": "to have a party",
          "partOfSpeech": "v",
          "phonetic": "fɛɪ̯te",
          "photoFile": "",
          "pluralForm": "",
          "scientificName": "",
          "semanticDomain": "",
          "semanticDomain2": "",
          "semanticDomain_custom": "",
          "soundFile": "0006-feter.mp3",
          "source": "test source|with multiples sources, test|https://example.com",
          "speakerAge": "31",
          "speakerGender": "m",
          "speakerHometown": "Montreal, Canada",
          "speakerName": "David Boucher",
          "vernacular_exampleSentence": "On va vraiment fêter à soir",
        },
        {
          "": "",
          "dialect": "Central Luganda",
          "en_exampleSentence": "",
          "en_gloss": "I will see you",
          "es_exampleSentence": "",
          "es_gloss": "Voy a verte",
          "interlinearization": "1SG-Fut-2SG-see-Fin.V",
          "lexeme": "njakulaba",
          "localOrthography": "",
          "morphology": "n-ja-ku-lab-a",
          "notes": "",
          "partOfSpeech": "vp",
          "phonetic": "",
          "photoFile": "",
          "pluralForm": "",
          "scientificName": "",
          "semanticDomain": "",
          "semanticDomain2": "",
          "semanticDomain_custom": "",
          "soundFile": "751-I-will-see-you.mp3",
          "source": "",
          "speakerAge": "50",
          "speakerGender": "m",
          "speakerHometown": "",
          "speakerName": "EB",
          "vernacular_exampleSentence": "",
        },
        {
          "": "",
          "dialect": "",
          "en_exampleSentence": "",
          "en_gloss": "bye",
          "es_exampleSentence": "",
          "es_gloss": "adiós",
          "interlinearization": "",
          "lexeme": "vale",
          "localOrthography": "",
          "morphology": "",
          "notes": "",
          "partOfSpeech": "",
          "phonetic": "",
          "photoFile": "",
          "pluralForm": "",
          "scientificName": "",
          "semanticDomain": "",
          "semanticDomain2": "",
          "semanticDomain_custom": "",
          "soundFile": "",
          "source": "",
          "speakerAge": "",
          "speakerGender": "",
          "speakerHometown": "",
          "speakerName": "",
          "vernacular_exampleSentence": "",
        },
      ]
    `);
  });
}
