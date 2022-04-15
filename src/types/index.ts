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