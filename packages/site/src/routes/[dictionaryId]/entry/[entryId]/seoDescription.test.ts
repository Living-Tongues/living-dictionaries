import type { IEntry } from '@living-dictionaries/types';
import { seoDescription, showLocalOrthographies, showPartsOfSpeech } from './seoDescription';
import { entriesWithAlternateOrthographies } from '../../entries/print/mock-data';

describe('seoDescription', () => {
  const $t = (id: string) => {
    switch (id) {
      case 'gl.en':
        return 'English';
      case 'gl.es':
        return 'Spanish';
      default:
        return 'other';
    }
  };

  test('just demoing to get things started... needs changed and many more tests added', () => {
    const entry: IEntry = {
      lx: 'hi',
      gl: { en: 'hello', es: 'hola' },
    };
    const dictionaryGlossLanguages = ['es'];

    const result = seoDescription(entry, dictionaryGlossLanguages, $t);
    expect(result).toMatchInlineSnapshot('"Spanish: hola, English: hello."');
  });
});

describe('showLocalOrthographies', () => {
  const mockEntries: IEntry[] = entriesWithAlternateOrthographies;

  test('showing some local orthographies', () => {
    expect(showLocalOrthographies(mockEntries[1]).join(', ')).toMatchInlineSnapshot(
      '"さよなら, 안녕, αντίο"'
    );
  });
  test('showing all local orthographies', () => {
    expect(showLocalOrthographies(mockEntries[0]).join(', ')).toMatchInlineSnapshot(
      '"Nnọọ, Привет, سلام, नमस्ते, שלום"'
    );
  });
});

describe('showPartsOfSpeech', () => {
  const partsOfSpeech = {
    stringPOS: 'n',
    arrayPOS1: ['n', 'adj'],
    arrayPOS2: ['v'],
    emptyArray: [],
    emptyString: '',
    null: null,
  };

  test('Showing parts of speech', () => {
    expect(showPartsOfSpeech(partsOfSpeech.stringPOS)).toMatchInlineSnapshot('"n."');
    expect(showPartsOfSpeech(partsOfSpeech.emptyString)).toMatchInlineSnapshot('""');
    expect(showPartsOfSpeech(partsOfSpeech.arrayPOS1)).toMatchInlineSnapshot('"n, adj."');
    expect(showPartsOfSpeech(partsOfSpeech.arrayPOS2)).toMatchInlineSnapshot('"v."');
    expect(showPartsOfSpeech(partsOfSpeech.emptyArray)).toMatchInlineSnapshot('"."');
    expect(showPartsOfSpeech(partsOfSpeech.null)).toMatchInlineSnapshot('""');
  });
});
