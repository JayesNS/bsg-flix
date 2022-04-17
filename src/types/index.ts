export interface User {
  Id: number;
  UserName: string;
  FullName: string;
  Email?: string;
  Initials?: string;
  ClientRoles: string[];
  Products?: any[];
}

export interface AuthorizationToken {
  AuthResult?: string;
  Token: string;
  TokenExpires: string;
  RefreshToken?: string;
}

export interface SignInResponse {
  User: User;
  AuthorizationToken: AuthorizationToken;
}

export type ResponseErrorType = 'MODEL_VALIDATION_ERROR';

export interface ResponseError {
  MessageKey: ResponseErrorType;
  Message: string;
  ErrorDetail: {
    Message: string;
    ExceptionType: string;
  }
}

export enum ImageTypeCode {
  COVER = 'COVER',
  HIGHLIGHTS = 'HIGHLIGHTS',
  FRAME = 'FRAME'
}
export interface Image {
  Id: number;
  MediaId: number;
  PlatformCode: 'ANY';
  ImageTypeCode: ImageTypeCode;
  Url: string;
  Width: number;
  Height: number;
}

export type MediaTypeCode = 'LIVE' | 'VOD';

export type MediaTypeDisplayName = 'Na żywo' | 'VOD';

export interface Media {
  Id: number;
  Guid: string;
  MediaTypeCode: MediaTypeCode;
  MediaTypeDisplayName: MediaTypeDisplayName;
  MediaAgeRestrictionValueMin: number;
  MediaAgeRestrictionImageUrl: string;
  Title: string;
  Description: string;
  Year: number;
  Duration: number;
  IsTrialContentAvailable: boolean;
  AvailableFrom: string;
  Images: Image[];
  Products: any[];
}

export interface MediaListResponse {
  CacheDataValidTo: string;
  SourceType: 'MediaList';
  Entities: Media[];
  PageSize: number;
  PageNumber: number
  TotalCount: number;
}

export interface MediaPlayInfo {
  MediaId: number;
  Title: string;
  Description: string;
  MediaTypeCode: MediaTypeCode;
  MediaTypeDisplayName: MediaTypeDisplayName;
  StreamId: number;
  Provider: 'Internal';
  ContentUrl: string;
}

export enum StreamType {
  TRIAL = 'TRIAL',
  MAIN = 'MAIN'
}
