import { apiSlice } from "../api/apiSlice";

const AUTH_URL = "/auth";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
