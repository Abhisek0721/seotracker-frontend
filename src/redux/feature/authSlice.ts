import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginuserResponse } from "../util/InterfaceTypes";

interface User {
  user: {
    userId: string;
    email: string;
    full_name: string;
  } | null;
  access_token: string | null;
}

const storedUser = localStorage.getItem("user");
const isaccess_token = localStorage.getItem("access_token");

const initialState: User = {
  user: storedUser ? JSON.parse(storedUser) : null,
  access_token: isaccess_token ? JSON.parse(isaccess_token) : null,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",

  reducers: {
    setUserInfo: (state, action: PayloadAction<LoginuserResponse>) => {
      const { access_token, user } = action.payload;
      state.user = user;
      state.access_token = access_token;

      localStorage.setItem("access_token", JSON.stringify(access_token));
      localStorage.setItem("user", JSON.stringify(user));
    },

    removeUserInfo: (state) => {
      state.access_token = null;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
    },
  },
});

export const { setUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;
