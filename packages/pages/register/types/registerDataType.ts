interface RegisterStateTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  orgName: string;
  emailValidation: boolean;
  passwordValidation: boolean;
  grade: number;
  specifics: Array<boolean>;
  [key: string]: unknown;
}

interface RegisterCredentialsApi {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  orgName: string;
  time_zone: string;
}

interface RegisterResponseApi {
  hasError?: number;
  err?: string;
  isAuthenticated: string;
  data: {
    message: string;
  };
}

export type { RegisterStateTypes, RegisterCredentialsApi, RegisterResponseApi };
