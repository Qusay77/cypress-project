import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RowDataType, SortType, TableStateTypes } from "../types";

const initialState: TableStateTypes = {
	limit: 10,
	page: 1,
	expandedRowKeys: [],
	data: [],
	columns: [
		{ id: "id", name: "Id", width: 50, sortable: true },
		{ id: "firstName", name: "First Name", flexGrow: 1, sortable: true },
		{ id: "lastName", name: "Last Name", flexGrow: 1, sortable: true },
		{ id: "email", name: "Email", flexGrow: 1, sortable: true },
	],
	sortColumn: undefined,
	sortType: undefined,
	loading: false,
};
const tableSlice = createSlice({
	name: "table",
	initialState,
	reducers: {
		setLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setExpandedRowKeys: (state, action: PayloadAction<Array<number>>) => {
			state.expandedRowKeys = action.payload;
		},
		setData: (state, action: PayloadAction<Array<RowDataType>>) => {
			state.data = action.payload;
		},
		setColumns: (state, action: PayloadAction<Array<RowDataType>>) => {
			state.columns = action.payload;
		},
		setSortColumn: (state, action: PayloadAction<string | undefined>) => {
			state.sortColumn = action.payload;
		},
		setSortType: (state, action: PayloadAction<SortType>) => {
			state.sortType = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

export const actions = {
	...tableSlice.actions,
};
export default tableSlice.reducer;
