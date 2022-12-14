import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../src/service/usersApi";

const middleware = [usersApi.middleware];
export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});
