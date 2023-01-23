import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LoginStateTypes } from "../types";
import { validateEmail, validatePassword } from "../utils/validations";

const initialState: LoginStateTypes = {
	email: "",
	password: "",
	newPassword: "",
	orgName: "",
	rememberMe: false,
	emailValidation: false,
	passwordValidation: false,
	newPasswordValidation: 0,
	grade: 0,
	specifics: [],
};
const LoginSlice = createSlice({
	name: "Login",
	initialState,
	reducers: {
		setRememberMe: (state, action: PayloadAction<boolean>) => {
			state.rememberMe = action.payload;
		},
		setEmail: (state, action: PayloadAction<string>) => {
			const value = action.payload;
			state.email = value;
			const isValid = validateEmail(value);
			state.emailValidation = isValid;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			const value = action.payload;
			state.password = value;
			const isValid = value.length > 7;
			state.passwordValidation = isValid;
		},
		setNewPassword: (state, action: PayloadAction<string>) => {
			const value = action.payload;
			state.newPassword = value;
			const { grade, specifics } = validatePassword(value);
			state.grade = grade;
			state.specifics = specifics;
		},
		setOrgName: (state, action: PayloadAction<string>) => {
			state.orgName = action.payload;
		},
		loadInitialState: (state, action: PayloadAction<LoginStateTypes>) => {
			const states = Object.entries(action.payload);
			states.forEach((entry): void => {
				state[entry[0]] = entry[1];
			});
		},
	},
});

export const actions = {
	...LoginSlice.actions,
};
export default LoginSlice.reducer;
