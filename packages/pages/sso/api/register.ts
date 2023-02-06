import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "store/types";
import {
  RegisterCredentialsApi,
  RegisterResponseApi,
} from "../types/registerDataType";
import RegisterSlice, { actions } from "./store";

export const registerApi = createApi({
  reducerPath: "registerApi",
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
    register: builder.mutation<RegisterResponseApi, RegisterCredentialsApi>({
      query: (credentials) => ({
        url: "/v1/register-org",
        method: "POST",
        body: { params: credentials },
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;

export { RegisterSlice, actions };
