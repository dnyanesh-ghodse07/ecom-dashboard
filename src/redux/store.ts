import { configureStore } from "@reduxjs/toolkit";
import { appwriteApi } from "./appWriteApi";
import authReducer from "./authSlice";
import { Client } from "appwrite";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [appwriteApi.reducerPath]: appwriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appwriteApi.middleware),
});

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// ✅ Move Real-time Listener to `store.ts`
client.subscribe(
  `databases.${import.meta.env.VITE_APPWRITE_DATABASE_ID}.collections.${import.meta.env.VITE_APPWRITE_COLLECTION_ID}.documents`,
  (response: { payload: { $id: string; [key: string]: unknown } }) => {
    if (!response.payload) return;

    const { $id, ...updatedData } = response.payload;

    store.dispatch(
      appwriteApi.util.updateQueryData("getProducts", undefined, (draft) => {

        interface Draft {
          $id: string;
          [key: string]: unknown;
        }

        const index = draft.findIndex((doc: Draft) => doc.$id === $id);
        if (index !== -1) {
          draft[index] = { $id, ...updatedData }; // ✅ Update product
        } else {
          draft.push({ $id, ...updatedData }); // ✅ Add new product
        }
      })
    );
  }
);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
