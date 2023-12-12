import { partsOfSpeech } from '@living-dictionaries/site';

export function reverse_parts_of_speech_mapping(parts_of_speech: string | string[]): string[] {
  parts_of_speech = typeof(parts_of_speech) === 'string' ? [parts_of_speech] : parts_of_speech
  const parts_of_speech_abbreviations = parts_of_speech.map(part_of_speech => {
    const matched_pos_obj = partsOfSpeech.find(pos => pos.enName === part_of_speech)?.enAbbrev;
    return matched_pos_obj || part_of_speech;
  });
  return [...new Set(parts_of_speech_abbreviations)];
}


if (import.meta.vitest) {
  describe('reverse_parts_of_speech_mapping', () => {
    test('converts names to abbreviation', () => {
      const pos = ['noun', 'adjective'];
      const expected = ['n', 'adj'];
      expect(reverse_parts_of_speech_mapping(pos)).toEqual(expected);
    });

    test('converts names and keeps abbreviations', () => {
      const pos = ['verb', 'n', 'adverb'];
      const expected = ['v', 'n', 'adv'];
      expect(reverse_parts_of_speech_mapping(pos)).toEqual(expected);
    });

    test('converts string to array and abbreviate', () => {
      const pos = 'noun';
      const expected = ['n'];
      expect(reverse_parts_of_speech_mapping(pos)).toEqual(expected);
    });

    test('eliminates duplicates if exists', () => {
      const pos = ['noun', 'n'];
      const expected = ['n'];
      expect(reverse_parts_of_speech_mapping(pos)).toEqual(expected);
    })
  })
}
