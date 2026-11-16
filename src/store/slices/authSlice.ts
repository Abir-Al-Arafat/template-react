import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ data: { data: { user: User; token: string } } }>,
    ) => {
      state.user = action.payload.data.data.user;
      state.token = action.payload.data.data.token;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.data.data.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action?.payload;
    },
  },
});

export const { loginSuccess, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
