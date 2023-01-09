import type { Variants } from 'kitbook';
import type Component from './EntryPartOfSpeech.svelte';
export const variants: Variants<typeof Component> = [
  {
    name: 'strings',
    props: {
      value: 'nouns',
    }
  },
  {
    name: 'arrays',
    props: {
      value: ['n', 'v'],
    }
  },
]