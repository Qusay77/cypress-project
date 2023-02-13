import { LoginState } from "@qusay77/login-page";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, loginApi } from "@qusay77/auth";
import {
	registerData,
	RegisterSlice,
	registerApi,
} from "@qusay77/register-page";
import { tableState } from "@packages/table";

const middleware = [loginApi.middleware];
const middleware2 = [registerApi?.middleware];
export const store = configureStore({
	reducer: {
		[loginApi.reducerPath]: loginApi.reducer,
		[registerApi?.reducerPath]: registerApi?.reducer,
		login: LoginState,
		register: registerData,
		auth: authSlice.reducer,
		registerSlice: RegisterSlice.reducer,
		table: tableState,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware).concat(middleware2),
});
