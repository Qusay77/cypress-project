import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthStateTypes } from "../types";

const initialState: AuthStateTypes = {
	auth: {
		access: {
			expires: null,
			token: null,
		},
		refresh: {
			expires: null,
			token: null,
		},
	},
	rememberMe: true,
	isLoggedIn: false,
};
const AuthSlice = createSlice({
	name: "Auth",
	initialState,
	reducers: {
		setIsLoggedIn: (
			state,
			action: PayloadAction<AuthStateTypes["isLoggedIn"]>,
		) => {
			state.isLoggedIn = action.payload;
		},
		setAuth: (state, action: PayloadAction<AuthStateTypes["auth"]>) => {
			state.auth = action.payload;
			state.isLoggedIn = true;
		},
		setRememberMe: (state, action: PayloadAction<boolean>) => {
			const value = action.payload;
			state.rememberMe = value;
		},
		loadInitialState: (state, action: PayloadAction<AuthStateTypes>) => {
			const states = Object.entries(action.payload);
			states.forEach((entry): void => {
				state[entry[0]] = entry[1];
			});
		},
	},
});

export const actions = {
	...AuthSlice.actions,
};
export default AuthSlice;
