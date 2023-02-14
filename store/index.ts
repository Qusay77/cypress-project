import { LoginState } from "@qusay77/login-page";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, loginApi } from "@qusay77/auth";
import { OrgsSlice, orgsApi } from "@qusay77/orgs";

const middleware = [loginApi.middleware];
const orgsMiddleware = [orgsApi.middleware];
export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [orgsApi.reducerPath]: orgsApi.reducer,
    login: LoginState,
    auth: authSlice.reducer,
    orgslice: OrgsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware).concat(orgsMiddleware),
});
