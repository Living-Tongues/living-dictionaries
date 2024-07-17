import type { Glossing_Languages } from '@living-dictionaries/site/src/lib/glosses/glossing-languages'

export type Row = {
  [key in (Full_Entry | Full_Sense | Full_Sentence)]?: string;
}
// 's3.es_gloss': 'hi',
// 'semanticDomain4': '2.3',
// 's2.fr_exampleSentence.3': 'Bonjour docteur',
// 's4.default_vernacular_exampleSentence': 'foo bar',

type Full_Entry = `${String_Fields | Multiple_Fields | Translation_Fields}`

type String_Fields = 'lexeme' | 'dialects' | 'ID' | 'soundFile' | 'speakerName' | 'scientificName' | 'speakerHometown' | 'speakerAge' | 'speakerGender' | 'notes' | 'source' | 'morphology' | 'interlinearization' | 'photoFile' | 'vernacular_exampleSentence' | 'pluralForm' | 'nounClass' | 'variant' | 'phonetic' | 'semanticDomain_custom'
type Fields_That_Can_Have_Multiple = 'localOrthography' | 'partOfSpeech' | 'semanticDomain'
type Multiple_Fields = `${Fields_That_Can_Have_Multiple}${Number_Suffix}`
type Number_Suffix = '' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Translation_Fields = `${Glossing_Languages}_gloss` | `${Glossing_Languages}_exampleSentence` | `${Writing_Systems}_vernacular_exampleSentence`

type Sense_Fields = `${Glossing_Languages}_gloss` | `partOfSpeech${Number_Suffix}` | `semanticDomain${Number_Suffix}` | 'nounClass'
type Full_Sense = `${Sense_Prefix}.${Sense_Fields}`
type Sense_Prefix = 's2' | 's3' | 's4' | 's5' | 's6' | 's7' | 's8' | 's9'

type Sentence_Fields = `${Glossing_Languages}_exampleSentence` | `${Writing_Systems}_vernacular_exampleSentence`
type Full_Sentence = `${Sense_Prefix}.${Sentence_Fields}` | `${Sense_Prefix}.${Sentence_Fields}.${Number_Suffix}`
type Writing_Systems = 'default' // TODO improve Writing Systems field
