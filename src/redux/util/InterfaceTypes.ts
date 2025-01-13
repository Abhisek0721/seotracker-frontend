export interface NewUser {
  full_name: string;
  email: string;
  password: string;
}

export interface NewUserResponse {
  access_token: string;
  user: {
    userId: string;
    email: string;
    full_name: string;
  };
}


export interface LoginUser {
  email: string;
  password: string;
}
export interface LoginuserResponse {
  access_token: string;
  user: {
    userId: string;
    email: string;
    full_name: string;
  };
}
