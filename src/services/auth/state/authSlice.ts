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
	rememberMe: false,
};
const AuthSlice = createSlice({
	name: "Login",
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<AuthStateTypes["auth"]>) => {
			state.auth = action.payload;
		},
		setRememberMe: (state, action: PayloadAction<boolean>) => {
			state.rememberMe = action.payload;
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
