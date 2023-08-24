import type { Variants } from 'kitbook';
import type Component from './+page.svelte';
import { readable, writable } from 'svelte/store';

const defaultStores = {
  user: null,
  admin: readable(0),
  isManager: readable(false),
  isContributor: readable(false),
  canEdit: readable(false),
  algoliaQueryParams: writable(''),
  dictionary: writable({
    name: 'test',
    glossLanguages: []
  }),
}

export const variants: Variants<Component> = [
  {
    name: 'Regular',
    props: {
      data: {
        ...defaultStores,
        initialEntry: readable({
          lx: 'test',
        })
      },
    },
  },
  {
    name: 'Admin 2',
    description: 'Will show JSON viewer',
    props: {
      data: {
        ...defaultStores,
        admin: readable(2),
        canEdit: readable(true),
        initialEntry: readable({
          lx: 'test',
        })
      },
    },
  },
]
