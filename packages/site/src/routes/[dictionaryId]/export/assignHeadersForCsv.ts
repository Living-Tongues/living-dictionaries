import type { EntryForCSV, translate_entries } from './prepareEntriesForCsv'
import { get_example_sentence, get_glosses, get_image_files, get_noun_class, get_parts_of_speech, get_plural_form, get_semantic_domain, get_variant } from './getRows'

export function get_local_orthography_headers(
  alternate_orthographies: string[],
) {
  const headers: EntryForCSV = {}
  if (alternate_orthographies) {
    alternate_orthographies.forEach((lo, index) => {
      if (index > 0) {
        headers[`localOrthography.${index + 1}`] = lo
      } else {
        // @ts-ignore
        headers.localOrthography = lo
      }
    })
  }
  return headers
}

export function get_sense_headers(entries: ReturnType<typeof translate_entries>) {
  let headers: EntryForCSV = {}

  for (const entry of entries) {
    for (const [sense_index, sense] of Array.from(entry.senses).entries()) {
      headers = {
        ...headers,
        ...get_glosses(sense.glosses, { sense_index, position: 'header' }),
        ...get_semantic_domain(sense.semantic_domains, { sense_index, position: 'header' }),
        ...get_parts_of_speech(sense.parts_of_speech_abbreviations, sense.parts_of_speech, { sense_index, position: 'header' }),
        ...get_noun_class(sense.noun_class, { sense_index, position: 'header' }),
        ...get_variant(sense.variant, { sense_index, position: 'header' }),
        ...get_plural_form(sense.plural_form, { sense_index, position: 'header' }),
        ...get_image_files(sense?.photo_ids?.[0], { sense_index, position: 'header' }),
        ...(sense.sentences ? get_example_sentence(sense.sentences[0], { sense_index, position: 'header' }) : {}),
      }
    }
  }

  return headers
}
