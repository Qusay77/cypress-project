import { LoginState } from "@qusay77/login-page";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice, loginApi } from "src/services/auth";
import {
	registerData,
	RegisterSlice,
	registerApi,
} from "@qusay77/register-page";
import { tableState } from "@packages/table";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { DatePickerSlice, sessionListApi } from "src/services/SessionsList";
const middleware = [loginApi.middleware];
const middleware2 = [registerApi?.middleware];
const middleware3 = [sessionListApi?.middleware];
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const reducer = combineReducers({
	[loginApi.reducerPath]: loginApi.reducer,
	[registerApi.reducerPath]: registerApi.reducer,
	[sessionListApi.reducerPath]: sessionListApi.reducer,
	login: LoginState,
	register: registerData,
	auth: authSlice.reducer,
	registerSlice: RegisterSlice.reducer,
	table: tableState,
	sessionListState: DatePickerSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(middleware)
			.concat(middleware2)
			.concat(middleware3),
});
