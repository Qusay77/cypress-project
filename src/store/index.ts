import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../service/usersApi";

const middleware = [usersApi.middleware];

export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});
