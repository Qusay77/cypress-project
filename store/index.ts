import { configureStore } from "@reduxjs/toolkit";
import { tableState } from "@packages/table";
import { usersApi } from "../src/service/usersApi";

const middleware = [usersApi.middleware];
export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		table: tableState,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});
