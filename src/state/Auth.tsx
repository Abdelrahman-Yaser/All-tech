import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../interface";

// Retrieve token and user from local storage safely
const getStoredUser = (): User | null => {
  try {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return null;
  }
};

// Initial state
const initialState: AuthState = {
  token: localStorage.getItem("token") || null, 
  user: getStoredUser(),
};

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

// Export actions & reducer
export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
