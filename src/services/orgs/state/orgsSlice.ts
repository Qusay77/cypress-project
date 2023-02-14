import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { OrgsStateTypes } from "../types";

const initialState: { orgId?: number | null; selectedDomain?: number | null } =
	{
		orgId: null,
		selectedDomain: null,
		result: [
			{
				orgId: 0,
				name: "",
				package: "",
				startDate: "",
				endDate: "",
				trailExpired: false,
				isSelectedOrg: false,
			} as OrgsStateTypes,
		] as Array<OrgsStateTypes>,
	};

const OrgsSlice: any = createSlice({
	name: "Orgs",
	initialState,
	reducers: {
		setOrgnizations: (state, action: PayloadAction<OrgsStateTypes>) => {
			console.log("action", action);
			state.result.fill(action.payload);
		},
		setOrgId: (state, action: PayloadAction<OrgsStateTypes["orgId"]>) => {
			state.orgId = action.payload;
		},
		setSelectedDomain: (
			state,
			action: PayloadAction<OrgsStateTypes["orgId"]>,
		) => {
			state.selectedDomain = action.payload;
		},
	},
});

export const actions = {
	...OrgsSlice.actions,
};
export default OrgsSlice;
