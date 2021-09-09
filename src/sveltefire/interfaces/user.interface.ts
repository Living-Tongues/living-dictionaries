import type { FieldValue, Timestamp } from 'firebase/firestore';
import type { IFirestoreMetaData } from '.';

export type IGenericUser = User & Omit<IFirestoreMetaData, 'id'>;

interface User {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  lastVisit?: Timestamp & FieldValue;
}
