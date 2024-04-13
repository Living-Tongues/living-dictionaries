import type { DbOperations } from '$lib/dbOperations'

/* eslint-disable require-await */
export const logDbOperations: DbOperations = {
  addNewEntry: async (args) => { console.info({ addNewEntry: args }) },
  deleteEntry: async (args) => { console.info({ deleteEntry: args }) },
  deleteVideo: async (args) => { console.info({ deleteVideo: args }) },
  deleteImage: async (args) => { console.info({ deleteImage: args }) },
  updateEntry: async (args) => { console.info({ updateEntry: args }) },
  updateEntryOnline: async (args) => { console.info({ updateEntryOnline: args }) },
  update_sense: async (args) => { console.info({ args }) },
  update_sentence: async (args) => { console.info(args) },
}
