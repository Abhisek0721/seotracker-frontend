import { apiSlice } from "../api/apiSlice";
import type { 
  NewUserResponse,
  LoginUser,
  LoginuserResponse,
  NewUser,
} from "../util/InterfaceTypes";


export const authAPi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation<NewUserResponse, NewUser>({
      query: (body) => ({
        url: "/api/v1/auth/signup",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body
      }),
    }),


    userLogin: build.mutation<LoginuserResponse,LoginUser>({
      query: (body) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserLoginMutation,
} = authAPi;
