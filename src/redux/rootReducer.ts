import { apiSlice } from "./features/api/apiSlice";

export const reducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
};
