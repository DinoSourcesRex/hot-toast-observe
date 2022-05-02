export interface ApiRequest {
  key: string;
  response?: HttpResponseWrapper;
  loading: boolean;
}

export enum RequestKey {
  None = 'none',
  Pokemon = 'pokemon',
}

// Use this in angular templates
export type RequestKeyMap = typeof RequestKey;

export interface HttpResponseWrapper {
  success: boolean;
}
