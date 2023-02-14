import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DatePickerStateTypes } from "../types";
import moment from "moment";

const initialState: DatePickerStateTypes = {
	startDate: moment(),
	endDate: moment(),
	fromRange: "00:00",
	toRange: "23:59",
};
const DatePickerSlice = createSlice({
	name: "DatePicker",
	initialState,
	reducers: {
		setFromRange: (state, action: PayloadAction<DatePickerStateTypes["fromRange"]>) => {
			const value = action.payload;
			state.fromRange = value;
		},
		setToRange: (state, action: PayloadAction<DatePickerStateTypes["toRange"]>) => {
			const value = action.payload;
			state.toRange = value;
		},
		setStartDate: (
			state,
			action: PayloadAction<DatePickerStateTypes["startDate"]>,
		) => {
			state.startDate = action.payload;
		},
		setEndDate: (
			state,
			action: PayloadAction<DatePickerStateTypes["endDate"]>,
		) => {
			state.endDate = action.payload;
		},
	},
});

export const actions = {
	...DatePickerSlice.actions,
};
export default DatePickerSlice;
