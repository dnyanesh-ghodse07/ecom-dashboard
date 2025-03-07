import { configureStore } from "@reduxjs/toolkit";
import { appwriteApi } from "./appWriteApi";
import authReducer from "./authSlice";
import { persistReducer, persistStore } from "redux-persist";
// import { Client } from "appwrite";
import storage from "redux-persist/es/storage";


const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [appwriteApi.reducerPath]: appwriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(appwriteApi.middleware),
  
});

// const client = new Client()
//   .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// client.subscribe(
//   `databases.${import.meta.env.VITE_APPWRITE_DATABASE_ID}.collections.${import.meta.env.VITE_APPWRITE_COLLECTION_ID}.documents`,
//   (response: { payload: { $id: string; [key: string]: unknown } }) => {
//     if (!response.payload) return;

//     const { $id, ...updatedData } = response.payload;

//     store.dispatch(
//       appwriteApi.util.updateQueryData("getProducts", undefined, (draft) => {

//         interface Draft {
//           $id: string;
//           [key: string]: unknown;
//         }

//         const index = draft.findIndex((doc: Draft) => doc.$id === $id);
//         if (index !== -1) {
//           draft[index] = { $id, ...updatedData }; // ✅ Update product
//         } else {
//           draft.push({ $id, ...updatedData }); // ✅ Add new product
//         }
//       })
//     );
//   }
// );

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
