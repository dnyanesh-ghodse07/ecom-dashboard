import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APPWRITE_URL = import.meta.env.VITE_APPWRITE_URL;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID; // Ensure this is set
const APPWRITE_API_KEY = import.meta.env.VITE_APPWRITE_API_KEY; // Ensure this is set

export const appwriteApi = createApi({
  reducerPath: "appwriteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: APPWRITE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-Appwrite-Project", APPWRITE_PROJECT_ID);
      headers.set("X-Appwrite-Key", APPWRITE_API_KEY);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents`,
      transformResponse: (response) => response.documents,
      // providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: `/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents`,
        method: "POST",
        body: JSON.stringify(product),
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents/${id}`,
        method: "PATCH",
        body: JSON.stringify(payload),
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = appwriteApi;
