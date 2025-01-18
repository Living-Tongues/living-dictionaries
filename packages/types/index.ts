import type { Tables } from './supabase/combined.types'

export type { EntryView, SenseWithSentences, AudioWithSpeakerIds } from './supabase/entry.interface'
export type { VideoCustomMetadata, HostedVideo } from './video.interface'
export type { IAbout, IGrammar, Citation, Partner } from './dictionary.interface'
export type { Coordinates, IPoint, IRegion } from './coordinates.interface'
export type { IGlossLanguages, IGlossLanguage } from './gloss-language.interface'
export type { MultiString } from './gloss.interface'
export type { IExampleSentence } from './example-sentence.interface'
export type { DictionaryPhoto, PartnerPhoto } from './photo.interface'
export type { SemanticDomain } from './semantic-domain.interface'
export type { IUser, GoogleAuthUserMetaData } from './user.interface'
export type { IInvite } from './invite.interface'
export type { IDictionarySettings } from './dictionary-settings.interface'
export type { PartOfSpeech } from './part-of-speech.interface'
export type { IColumn } from './column.interface'
export type { HelperRoles, IHelper } from './helper.interface'
export { type IPrintFields, StandardPrintFields } from './print-entry.interface'
export { type EntryFieldValue, type i18nEntryFieldKey } from './entry-fields.enum'
export type { ContentUpdateRequestBody } from './supabase/content-update.interface'
export type { UnsupportedFields } from './supabase/unsupported.interface'
export type { Database, Tables, TablesInsert, TablesUpdate } from './supabase/combined.types'

export type DictionaryView = Tables<'dictionaries_view'>
