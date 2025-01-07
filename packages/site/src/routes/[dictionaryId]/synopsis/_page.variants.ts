import type { Variant, VariantMeta } from 'kitbook'
import { readable } from 'svelte/store'
import type { IDictionary } from '@living-dictionaries/types'
import type { awaitableDocStore } from 'sveltefirets'
import type Component from './+page.svelte'
import { mockDictionaryLayoutData } from '$lib/mocks/layout'
import { butterfly_google_storage_url } from '$lib/mocks/entries'

export const shared_meta: VariantMeta = {
  viewports: [
    { width: 700, height: 500 },
  ],
  languages: [],
}

// const shared = {} satisfies Partial<Variant<Component>>

export const No_Data: Variant<Component> = {
  data: {
    ...mockDictionaryLayoutData,
  },
}

export const All_Data: Variant<Component> = {
  data: {
    ...mockDictionaryLayoutData,
    dictionary: readable({
      name: 'test',
      iso6393: 'tt',
      glottocode: 'foo',
      glossLanguages: ['es', 'en'],
      alternateNames: ['testing', 'example', 'instance'],
      location: 'México City',
      coordinates: { latitude: -35, longitude: 88 },
      featuredImage: {
        specifiable_image_url: butterfly_google_storage_url,
      },
    }) as Awaited<ReturnType<typeof awaitableDocStore<IDictionary>>>,
  },
}
