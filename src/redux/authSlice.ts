import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      return user;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue((error as Error).message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, name }: RegisterPayload, { rejectWithValue }) => {
    try {
      const user = await account.create(ID.unique(), email, password, name);
      console.log("user", user);
      return user;
    } catch (error) {
      if ((error as { code: number }).code === 409) {
        return rejectWithValue("User already exists. Try logging in instead.");
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await account.deleteSession("current");
});

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    try {
      const user = await account.get();
      return user;
    } catch {
      return null;
    }
  }
);

interface User {
  $id: string;
  email: string;
  [key: string]: unknown;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as User | null,
    isLoading: false,
    error: null as string | null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })
      // register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })
      // logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("user");
      })
      // getCurrentUser
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = !!action.payload;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
