import { OrgsStateTypes, DomainStateTypes, DomainPayloadTypes } from "./types";
// https://github.com/parcel-bundler/parcel/issues/7622
// import issue, crashes builds
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "store/types";
import OrgsSlice, { actions } from "./state/orgsSlice";

console.log("process.env.REACT_APP_API_KEY", process.env.REACT_APP_API_KEY);
export const orgsApi = createApi({
	reducerPath: "orgApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_KEY,
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			//   const token = (getState() as RootState).auth.token;

			const token: any = localStorage.getItem("accessToken");
			if (token) {
				headers.set("Authorization", `Bearer ${JSON.parse(token)?.token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getOrgs: builder.mutation<Array<OrgsStateTypes>, {}>({
			query: (credentials) => ({
				url: "/v2/organizations/",
				method: "POST",
				body: credentials,
			}),
		}),
		getDomain: builder.mutation<Array<DomainStateTypes>, DomainPayloadTypes>({
			query: ({ id }) => ({
				url: `v2/organizations/${id}/domains`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetOrgsMutation, useGetDomainMutation } = orgsApi;
export type { OrgsStateTypes };
export { OrgsSlice, actions };
