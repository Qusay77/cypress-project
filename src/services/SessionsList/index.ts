import { DatePickerStateTypes } from "./types";
// https://github.com/parcel-bundler/parcel/issues/7622
// import issue, crashes builds
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { RootState } from "store/types";
import DatePickerSlice, { actions } from "./state/datePickerSlice";

interface SessionListResponse {}

interface SessionListType {
	filterObj: {
		domain: string;
		date: {
			from: string;
			to: string;
		};
	};
	orgId: number;
}

export const sessionListApi = createApi({
	reducerPath: "sessionList",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_KEY,
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			// const token = (getState() as RootState).auth.token;
			const access = localStorage.getItem("accessToken");
			if (access) {
				const tok = JSON.parse(access).token;

				headers.set("Authorization", `Bearer ${tok}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getSessionList: builder.mutation<SessionListResponse, SessionListType>({
			query: ({ filterObj, orgId }) => ({
				url: `/v2/sessions/${orgId}?kip=0&take=25`,
				method: "POST",
				body: {
					filter: filterObj,
					sort: {
						DATETIME: "ASC",
					},
					search: {},
				},
			}),
		}),
	}),
});

export const { useGetSessionListMutation } = sessionListApi;
export type { DatePickerStateTypes };
export { DatePickerSlice, actions };
