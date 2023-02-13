import { createSlice } from "@reduxjs/toolkit";

interface RegisterState {
  isRegister: boolean;
}

const initialState: RegisterState = {
	isRegister: false,
};
const RegisterSlice = createSlice({
	name: "RegisterApi",
	initialState,
	reducers: {
		setIsRegister: (state) => {
			state.isRegister = true;
		},
	},
});

export const actions = {
	...RegisterSlice.actions,
};
export default RegisterSlice;
