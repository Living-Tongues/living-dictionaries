export interface LDAlgoliaFields {
  objectID?: string; // Algolia object id = entry id
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

// media timestamps needs converted to a timestamp usable by Algolia
// only need gcs value of photos
// need path and speakerName value for audio - pull from speakerId on import to Algolia 