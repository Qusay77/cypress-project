import { LoginState } from "@qusay77/login-page";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, loginApi } from "@qusay77/auth";
import { tableState } from "@packages/table";

const middleware = [loginApi.middleware];
export const store = configureStore({
	reducer: {
		[loginApi.reducerPath]: loginApi.reducer,
		login: LoginState,
		auth: authSlice.reducer,
		table: tableState,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});
