/* export enum EntryPDFFieldsEnum {
  id = 'Id',
  lx = 'Lexeme',
  lo = 'Local Orthography',
  lo2 = 'Local Orthography 2',
  lo3 = 'Local Orthography 3',
  lo4 = 'Local Orthography 4',
  lo5 = 'Local Orthography 5',
  ph = 'Phonetic (IPA)',
  gl = 'Glosses',
  in = 'Interlinearization',
  mr = 'Morphology',
  ps = 'Part of Speech',
  sd = 'Semantic Domains',
  nc = 'Noun Class',
  pl = 'Plural Form',
  va = 'Variant',
  di = 'Dialect',
  nt = 'Notes',
  sr = 'Source(s)',
  xv = 'Example Vernacular',
  xs = 'Example Sentences',
  sf = 'Sound File',
  pf = 'Photo File',
  vfs = 'Video Files',
} */
// Local othrographies could be dynamic instead
export enum EntryPDFFieldsEnum {
  id = 'Id',
  lo = 'Local Orthography',
  lo2 = 'Local Orthography 2',
  lo3 = 'Local Orthography 3',
  lo4 = 'Local Orthography 4',
  lo5 = 'Local Orthography 5',
  in = 'Interlinearization',
  mr = 'Morphology',
  nc = 'Noun Class',
  pl = 'Plural Form',
  va = 'Variant',
  di = 'Dialect',
  nt = 'Notes',
}
type EntryForPDFKeys = keyof typeof EntryPDFFieldsEnum;
export type IEntryForPDF = {
  [key in EntryForPDFKeys]?: string;
};

//TODO Can we make a enum with boolean values?
