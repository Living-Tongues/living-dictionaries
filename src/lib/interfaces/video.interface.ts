export interface IVideo {
  //TODO not ready, need to understand needed YouTube parameters
  path: string; // Firebase Storage
  ts?: any; // timestamp // WAS uploadedAt
  ab?: string; // added by uid // WAS uploadedBy
  sp?: string; // id of the speaker in the video
  externalId?: string; // external video ID
  playing?: boolean; // turned true when video is being played
}
