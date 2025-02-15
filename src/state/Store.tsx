import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Categories";
import authReducer from "./Auth";
export const store = configureStore({
    reducer: {
      categories:categoriesSlice,
      auth: authReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  
  export default store