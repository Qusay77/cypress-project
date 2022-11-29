// https://github.com/parcel-bundler/parcel/issues/7622
// import issue, crashes builds
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const x = "";
export const usersApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		// eslint-disable-next-line no-undef
		baseUrl: process.env.REACT_APP_API_KEY,
	}),
	endpoints: (builder) => ({
		users: builder.query({
			query: () => ({
				url: "/",
			}),
		}),
	}),
});

export const { useUsersQuery } = usersApi;
