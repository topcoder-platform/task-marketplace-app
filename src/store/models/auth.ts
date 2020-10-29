export interface User {
  aud: string;
  email: string;
  // eslint-disable-next-line camelcase
  email_verified: boolean;
  exp: number;
  handle: string;
  iat: string;
  iss: string;
  name: string;
  nickname: string;
  nonce: string;
  picture: string;
  roles: string[];
  sub: string;
  // eslint-disable-next-line camelcase
  updated_at: string;
  userId: number;
}

export interface Auth {
  isLoggedIn: boolean;
  user: User | null;
  checkingForToken: boolean;
}
