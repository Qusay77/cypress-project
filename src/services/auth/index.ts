import { AuthStateTypes } from "./types";
// https://github.com/parcel-bundler/parcel/issues/7622
// import issue, crashes builds
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "store/types";
import authSlice, { actions } from "./state/authSlice";

interface LoginResponse {
	access: {
		token: string;
		expires: string;
	};
	refresh: {
		token: string;
		expires: string;
	};
	data: {
		message: string;
	};
}

interface LoginResponseRefresh {
	data: {
		access: {
			token: string;
			expires: string;
		};
		refresh: {
			token: string;
			expires: string;
		};
	};
}

interface LoginType {
	email?: string;
	password?: string;
	token?: string;
}

export const loginApi = createApi({
	reducerPath: "loginAuth",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_KEY,
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authentication", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginType>({
			query: (credentials) => ({
				url: "/v2/auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
		refreshToken: builder.mutation<LoginResponseRefresh, string>({
			query: (refreshToken) => ({
				url: "/v2/auth/refresh-tokens",
				method: "POST",
				body: { refreshToken },
			}),
		}),
		forgotPassword: builder.mutation<{ data: LoginResponse["data"] }, string>({
			query: (email) => ({
				url: "/v2/auth/forgot-password",
				method: "POST",
				body: { email },
			}),
		}),
		resetPassword: builder.mutation<LoginResponse, LoginType>({
			query: (credentials) => ({
				url: "v2/auth/reset-password",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRefreshTokenMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
} = loginApi;
export type { AuthStateTypes };
export { authSlice, actions };
