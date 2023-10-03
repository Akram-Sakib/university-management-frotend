import { tagTypes } from "@/redux/tag-types";
import { apiSlice } from "../api/apiSlice";

const AUTH_URL = "/auth";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
