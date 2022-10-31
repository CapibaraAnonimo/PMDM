export interface RequestTokenResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface NewSessionResponse {
  success: boolean;
  session_id: string;
}

export interface DeleteSessionResponse {
  success: boolean;
}
