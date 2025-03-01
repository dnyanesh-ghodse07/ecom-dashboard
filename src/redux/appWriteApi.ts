import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appwriteApi = createApi({
  reducerPath: "appwriteApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APPWRITE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () =>
        `/databases/${import.meta.env.VITE_APPWRITE_DATABASE_ID}/collections/${import.meta.env.VITE_APPWRITE_COLLECTION_ID}/documents`,
      transformResponse: (response) => response.documents,
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: `/databases/${import.meta.env.VITE_APPWRITE_DATABASE_ID}/collections/${import.meta.env.VITE_APPWRITE_COLLECTION_ID}/documents`,
        method: "POST",
        body: product,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/databases/${import.meta.env.VITE_APPWRITE_DATABASE_ID}/collections/${import.meta.env.VITE_APPWRITE_COLLECTION_ID}/documents/${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/databases/${import.meta.env.VITE_APPWRITE_DATABASE_ID}/collections/${import.meta.env.VITE_APPWRITE_COLLECTION_ID}/documents/${id}`,
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
