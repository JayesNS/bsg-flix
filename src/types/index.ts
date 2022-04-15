export interface User {
  Id: string;
  UserName: string;
  FullName: string;
  ClientRoles: string[];
}

export interface AuthorizationToken {
  AuthResult: string;
  Token: string;
  TokenExpires: string;
}

export interface SignInResponse {
  User: User;
  AuthorizationToken: AuthorizationToken;
}

export type ResponseErrorType = 'MODEL_VALIDATION_ERROR';

export interface ResponseError {
  MessageKey: ResponseError;
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

export interface Media {
  Id: number;
  Guid: string;
  MediaTypeCode: 'LIVE' | 'VOD';
  MediaTypeDisplayName: 'Na żywo' | 'VOD';
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
