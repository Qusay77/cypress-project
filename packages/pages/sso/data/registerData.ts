import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RegisterStateTypes } from "../types/registerDataType";
// import { validateEmail, validatePassword } from "../utils/validations";

const initialState: RegisterStateTypes = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  orgName: "",
  emailValidation: false,
  passwordValidation: false,
  newPasswordValidation: 0,
  grade: 0,
  specifics: [],
};
const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.firstName = value;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.lastName = value;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.email = value;
      // const isValid = validateEmail(value);
      // state.emailValidation = isValid;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.password = value;
      const isValid = value.length > 7;
      state.passwordValidation = isValid;
    },
    setOrgName: (state, action: PayloadAction<string>) => {
      state.orgName = action.payload;
    },
    loadInitialState: (state, action: PayloadAction<RegisterStateTypes>) => {
      const states = Object.entries(action.payload);
      states.forEach((entry): void => {
        state[entry[0]] = entry[1];
      });
    },
  },
});

export const actions = {
  ...RegisterSlice.actions,
};
export default RegisterSlice.reducer;
