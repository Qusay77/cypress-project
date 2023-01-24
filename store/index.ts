import { LoginState } from "@qusay77/login-page";
import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "@qusay77/auth";

const middleware = [loginApi.middleware];
export const store = configureStore({
	reducer: {
		[loginApi.reducerPath]: loginApi.reducer,
		login: LoginState,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});
