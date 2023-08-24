import { generateTranslationsFromSpreadsheet, jsonFromLocalCsv } from './update-locales';
import path from 'node:path'

test('generateTranslationsFromSpreadsheet deep nests app translations', async () => {
  const rows = await jsonFromLocalCsv(path.join(__dirname, './App-Translations.csv'));
  const translations = generateTranslationsFromSpreadsheet(rows, { nesting: 'deep' });
  expect(translations.en.direction).toBe('ltr');
  expect(translations.he.direction).toBe('rtl');
  expect(translations.en.about.about_LD).toBe('About Living Dictionaries');
  expect(translations.es.about.about_LD).toBe('Acerca de Diccionarios Vivos');
});

test('generateTranslationsFromSpreadsheet prefixes glossing languages', async () => {
  const rows = await jsonFromLocalCsv(path.join(__dirname, './Glossing-Languages.csv'));
  const translations = generateTranslationsFromSpreadsheet(rows, { prefix: 'gl' });
  expect(translations.en.gl.aa).toBe('Afar');
  expect(translations.es.gl.aa).toBe('Lejos');
});

test('generateTranslationsFromSpreadsheet prefixes parts of speech', async () => {
  const rows = await jsonFromLocalCsv(path.join(__dirname, './Parts-of-Speech.csv'));
  const translations = generateTranslationsFromSpreadsheet(rows, { prefix: 'ps' });
  expect(translations.en.ps.n).toBe('noun');
  expect(translations.es.ps.n).toBe('sustantivo');
});

test('generateTranslationsFromSpreadsheet prefixes parts of speech abbreviations', async () => {
  const rows = await jsonFromLocalCsv(path.join(__dirname, './Parts-of-Speech.csv'));
  const translations = generateTranslationsFromSpreadsheet(rows, { prefix: 'psAbbrev' });
  expect(translations.en.psAbbrev.n).toBe('n');
  expect(translations.es.psAbbrev.n).toBe('s');
});
