import { projectId, db } from '../config';
import algoliasearch from 'algoliasearch';

import algoliaKeys from './algolia-admin-key.json';
import { prepareDataForIndex } from '@living-dictionaries/functions/src/algolia/prepareDataForIndex';
import { IEntry } from '@living-dictionaries/types';
const ADMIN_KEY = algoliaKeys.adminKey;

import { ALGOLIA_APP_ID } from './config';
const client = algoliasearch(ALGOLIA_APP_ID, ADMIN_KEY);
const index = client.initIndex(
  projectId === 'talking-dictionaries-dev' ? 'entries_dev' : 'entries_prod'
);

const updateIndexByField = async (fieldToIndex: string, dry = true) => {
  // The field must be indexed first in Firebase
  const querySnapshot = await db.collectionGroup('words').where(fieldToIndex, '!=', null).get();

  if (dry) {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  } else {
    const entryPromises = querySnapshot.docs.map(async (doc) => {
      const entry = await prepareDataForIndex(doc.data() as IEntry, doc.ref.parent.parent.id, db);
      return { ...entry, objectID: doc.id };
    });
    const entries = await Promise.all(entryPromises);

    console.log(entries);

    // https://www.algolia.com/doc/api-reference/api-methods/add-objects/#examples
    // if forced to iterate instead of save all at once, take note of the rate limiting at 5000 backlogged requests https://www.algolia.com/doc/faq/indexing/is-there-a-rate-limit/
    index
      .saveObjects(entries)
      .then(({ objectIDs }) => {
        console.log('Entries indexed: ', objectIDs.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
//TODO is it fine this way or would it be better to execute this via a command as we do when import dictionaries?
updateIndexByField('nc', false);
