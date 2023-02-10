import type { Timestamp } from 'firebase/firestore';
import type { IFirestoreMetaData, IFirestoreMetaDataAbbreviated } from 'sveltefirets';
import type { IGloss } from './gloss.interface';
import type { IExampleSentence } from './exampe-sentence.interface';
import type { DatabaseAudio, ExpandedAudio } from './audio.interface';
import type { DatabasePhoto, ExpandedPhoto } from './photo.interface';
import type { DatabaseVideo, ExpandedVideo } from './video.interface';

// current interface used across the site that we will migrate from this to just exapndedEntry
export type IEntry = ExpandedEntry & ActualDatabaseEntry & LDAlgoliaFields

export interface ExpandedEntry extends IFirestoreMetaData {
  id?: string;
  lexeme?: string;
  local_orthagraphy_1?: string;
  local_orthagraphy_2?: string;
  local_orthagraphy_3?: string;
  local_orthagraphy_4?: string;
  local_orthagraphy_5?: string;
  phonetic?: string;
  senses?: ExpandedSense[];
  interlinearization?: string;
  morphology?: string;
  plural_form?: string;
  variant?: string;
  dialects?: string[];
  notes?: string;
  sources?: string[];
  sound_files?: ExpandedAudio[];
  elicitation_id?: string;
  deletedAt?: Timestamp;
  // scientific_names?: string[]; // handle italics and non-italics portions of scientific names
}

export interface ExpandedSense {
  glosses?: IGloss[];
  parts_of_speech?: string[];
  semantic_domains?: string[];
  example_sentences: IExampleSentence[];
  photo_files?: ExpandedPhoto[];
  video_files?: ExpandedVideo[];
  noun_class?: string;
  definition_english?: string;
}

export interface DatabaseSense {
  gl?: IGloss;
  ps?: string[]; // parts_of_speech
  sd?: string[]; // semantic domain strings, only using for custom semantic domains brought in from imports
  sdn?: string[]; // semantic domain number, simplified system modeled after SemDom (eg. 2.1.2.3)
  xs?: IExampleSentence[];
  pfs?: DatabasePhoto[];
  deletedPfs?: DatabasePhoto[];
  vfs?: DatabaseVideo[];
  deletedVfs?: DatabaseVideo[];
  nc?: string; // noun_class
  de?: string; // definition_english, only in Bahasa Lani (jaRhn6MAZim4Blvr1iEv) deprecated by Greg
}

export type ActualDatabaseEntry = Omit<GoalDatabaseEntry, 'ps'> & DeprecatedEntry;

export interface GoalDatabaseEntry extends IFirestoreMetaDataAbbreviated { 
  lx?: string; // lexeme
  lo1?: string; // local_orthography_2
  lo2?: string; // local_orthography_2
  lo3?: string; // local_orthography_3
  lo4?: string; // local_orthography_4
  lo5?: string; // local_orthography_5
  ph?: string; // phonetic
  sn?: DatabaseSense[];
  in?: string; // interlinearization
  mr?: string; // morphology
  pl?: string; // plural_form
  va?: string; // variant (currently babanki only)
  di?: string; // dialect
  nt?: string; // notes
  sr?: string[]; // sources
  sfs?: DatabaseAudio[];
  deletedSfs?: DatabaseAudio[];
  ii?: string; // importId which can be used to show all entries from a particular import
  ei?: string; // Elicitation Id for Munda languages or Swadesh Composite number list from Comparalex
  deletedAt?: Timestamp;
}

interface DeprecatedEntry extends Omit<DatabaseSense, 'ps' | 'xs' | 'pfs' | 'deletedPfs'> {
  ps?: string | string[]; // parts_of_speech
  lo?: string; // local_orthography_1
  sf?: DatabaseAudio; // sound file
  pf?: DatabasePhoto; // photo file
  xs?: IExampleSentence;
  xv?: string; // example vernacular - used for old dictionary imports (deprecated)
  ab?: string; // addedBy
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
} // we can set up a nightly function to batch convert 1000 entries with deprecated fields in the database to the current format and then as fields get weeded out they can be removed from here

interface LDAlgoliaFields {
  dictId?: string; // dictionary Id entry belongs to, to filter search results by dictionary
  _highlightResult?: any;
  
  hasImage?: boolean;
  hasAudio?: boolean;
  hasSpeaker?: boolean;
  hasSemanticDomain?: boolean;
  hasPartOfSpeech?: boolean;
  hasNounClass?: boolean;
  hasPluralForm?: boolean;
}

