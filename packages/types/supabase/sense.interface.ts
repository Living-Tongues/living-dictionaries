import type { Tables } from './combined.types'

export type SenseWithSentences = (
  Pick<Tables<'senses'>, 'id' | 'glosses' | 'parts_of_speech' | 'semantic_domains' | 'write_in_semantic_domains' | 'noun_class' | 'definition' | 'plural_form' | 'variant'>
  & {
    sentences: Pick<Tables<'sentences'>, 'id' | 'text' | 'translation'>[]
    photos: Pick<Tables<'photos'>, 'id' | 'source' | 'photographer' | 'serving_url'>[]
    videos: (Pick<Tables<'videos'>, 'id' | 'source' | 'videographer' | 'storage_path' | 'hosted_elsewhere'> & { speaker_ids: string[] })[]
  }
)

export type AudioWithSpeakerIds = Tables<'audio'> & { speaker_ids: string[] }
