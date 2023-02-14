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
import { OrgsSlice, orgsApi } from "@qusay77/orgs";

const middleware = [loginApi.middleware];
const middleware2 = [registerApi?.middleware];
const middleware3 = [sessionListApi?.middleware];
const orgsMiddleware = [orgsApi.middleware];
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "orgslice"],
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
	orgslice: OrgsSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
			.concat(middleware)
			.concat(middleware2)
			.concat(middleware3)
			.concat(orgsMiddleware),
});
