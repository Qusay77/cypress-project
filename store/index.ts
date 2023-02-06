import { LoginState } from "@qusay77/login-page";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, loginApi } from "@qusay77/auth";
import {
  registerData,
  RegisterSlice,
  registerApi,
} from "@qusay77/register-page";

const middleware = [loginApi.middleware];
const middleware2 = [registerApi.middleware];
export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    login: LoginState,
    register: registerData,
    auth: authSlice.reducer,
    registerSlice: RegisterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware).concat(middleware2),
});
