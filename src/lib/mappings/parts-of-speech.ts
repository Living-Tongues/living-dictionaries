import type { IPartOfSpeech } from '$lib/interfaces';

export const partsOfSpeech: IPartOfSpeech[] = [
  { enAbbrev: 'n', enName: 'noun' },
  { enAbbrev: 'pro', enName: 'pronoun' },
  { enAbbrev: 'v', enName: 'verb' },
  { enAbbrev: 'adj', enName: 'adjective' },
  { enAbbrev: 'adv', enName: 'adverb' },
  { enAbbrev: 'prep', enName: 'preposition' },
  { enAbbrev: 'conj', enName: 'conjunction' },
  { enAbbrev: 'det', enName: 'determiner' },
  { enAbbrev: 'int', enName: 'interjection' },
  { enAbbrev: 'no', enName: 'number' },
  { enAbbrev: 'dem', enName: 'demonstrative' },
  { enAbbrev: 'n pl', enName: 'plural noun' },
  { enAbbrev: 'phr', enName: 'phrase' },
  { enAbbrev: 'p', enName: 'particle' },
  { enAbbrev: 'neg', enName: 'negative' },
  { enAbbrev: 'quan', enName: 'quantifier' },
  { enAbbrev: 'rel', enName: 'relative' },
  { enAbbrev: 'v.aux', enName: 'auxiliary verb' },
  { enAbbrev: 'dem.a', enName: 'animate demonstrative' },
  { enAbbrev: 'dem.i', enName: 'inanimate demonstrative' },
  { enAbbrev: 'dem.loc', enName: 'locative demonstrative' },
  { enAbbrev: 'dim', enName: 'diminutive' },
  { enAbbrev: 'na', enName: 'animate noun' },
  { enAbbrev: 'ni', enName: 'inanimate noun' },
  { enAbbrev: 'pl', enName: 'plural' },
  { enAbbrev: 'pn', enName: 'prenoun' },
  { enAbbrev: 'pv', enName: 'preverb' },
  { enAbbrev: 'pn/v', enName: 'prenoun / preverb' },
  { enAbbrev: 'pro.a', enName: 'animate pronoun' },
  { enAbbrev: 'pro.i', enName: 'inanimate pronoun' },
  { enAbbrev: 'redup', enName: 'reduplication' },
  { enAbbrev: 'refl', enName: 'reflexive' },
  { enAbbrev: 'vai', enName: 'animate intransitive verb' },
  { enAbbrev: 'vai/ii', enName: 'animate / inanimate intransitive verb' },
  { enAbbrev: 'vii', enName: 'inanimate intransitive verb' },
  { enAbbrev: 'vta', enName: 'transitive animate verb' },
  { enAbbrev: 'vti', enName: 'transitive inanimate verb' },
  { enAbbrev: 'imp', enName: 'imperative/command marker' },
  { enAbbrev: 'pref', enName: 'prefix' },
  { enAbbrev: 'punc', enName: 'punctuation' },
  { enAbbrev: 'suff', enName: 'suffix' },
  { enAbbrev: 'vt', enName: 'transitive verb' },
  { enAbbrev: 'vi', enName: 'intransitive verb' },
  { enAbbrev: 'comp', enName: 'complement(izer)' },
  { enAbbrev: 'cpd', enName: 'compound' },
  { enAbbrev: 'pple', enName: 'participle' },
  { enAbbrev: 'sent', enName: 'sentence' },
  { enAbbrev: 'pr.n', enName: 'proper noun' },
  { enAbbrev: 'np', enName: 'noun phrase' },
  { enAbbrev: 'vp', enName: 'verb phrase' },
  { enAbbrev: 'ap', enName: 'adjective phrase' },
  { enAbbrev: 'adv.p', enName: 'adverb phrase' },
  { enAbbrev: 'q', enName: 'question marker' },
  { enAbbrev: 'ger', enName: 'gerund' },
  { enAbbrev: 'art', enName: 'article' },
  { enAbbrev: 'post', enName: 'postposition' },
  { enAbbrev: 'e.w', enName: 'entry word / discourse particle' },
  { enAbbrev: 'm.w', enName: 'measure word' },
  { enAbbrev: 'msd', enName: 'masdar' },
  { enAbbrev: 'idf', enName: 'idafa' },
  { enAbbrev: 'v.prdg', enName: 'verbal paradigm' },
  { enAbbrev: 'acr', enName: 'acronym' },
  { enAbbrev: 'cntr', enName: 'contraction' },
  { enAbbrev: 'num', enName: 'numeral' },
  { enAbbrev: 'act.v', enName: 'active verb' },
  { enAbbrev: 'stat.v', enName: 'stative verb' },
  { enAbbrev: 'caus.v', enName: 'causative verb' },
  { enAbbrev: 'v.suff', enName: 'verb suffix' },
  { enAbbrev: 'n.suff', enName: 'noun suffix' },
  { enAbbrev: 'n.pref', enName: 'noun prefix' },
  { enAbbrev: 'v.pref', enName: 'verb prefix' },
  { enAbbrev: 'ideo', enName: 'ideophone (onomatoepia / expressives)' },
  { enAbbrev: 'clf', enName: 'classifier' },
  { enAbbrev: 'tns', enName: 'tense marker' },
  { enAbbrev: 'asp', enName: 'aspect marker' },
  { enAbbrev: 'mod', enName: 'mood marker' },
  { enAbbrev: 'n.cls', enName: 'noun class marker' },
  { enAbbrev: 'quot', enName: 'quotative' },
  { enAbbrev: 'adp', enName: 'adposition' },
  { enAbbrev: 'def', enName: 'definite article' },
  { enAbbrev: 'indf', enName: 'indefinite article' },
  { enAbbrev: 'indfpro', enName: 'indefinite pronoun' },
  { enAbbrev: 'pers', enName: 'personal pronoun' },
  { enAbbrev: 'poss', enName: 'possessive pronoun' },
  { enAbbrev: 'reflpro', enName: 'reflexive pronoun' },
  { enAbbrev: 'relpro', enName: 'relative pronoun' },
  { enAbbrev: 'vd', enName: 'ditransitive verb' },
  { unofficial: true, enAbbrev: 'interr.pro', enName: 'interrogative pronoun' },
  { unofficial: true, enAbbrev: 'cop', enName: 'copula' },
  { unofficial: true, enAbbrev: 'imp.verb', enName: 'imperative verb' },
  { unofficial: true, enAbbrev: 'phr.v', enName: 'phrasal verb' },
  { unofficial: true, enAbbrev: 'inal.n', enName: 'inalienable noun' },
  { unofficial: true, enAbbrev: 'rel.n', enName: 'relational noun' },
  { unofficial: true, enAbbrev: 'v.n', enName: 'verbal noun' },
];
