import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseURL } from "@/helpers/config/envConfig";
import { tagTypesList } from "@/redux/tag-types";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseURL() }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {} = apiSlice;
