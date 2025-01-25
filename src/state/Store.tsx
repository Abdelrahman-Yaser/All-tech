import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Categories";
export const store = configureStore({
    reducer: {
      categories:categoriesSlice
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  
  export default store