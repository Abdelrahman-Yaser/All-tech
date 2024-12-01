import { createSlice } from "@reduxjs/toolkit";
import { Categorie } from "../interface";
import {fetchData}from "../apis/queryKeys/Categories"
interface ProductsState {
    items: Categorie[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  const initialState: ProductsState = {
    items: [],
    loading: 'idle',
    error: null,
  };

export const sliceCatgories=createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.items = action.payload;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload as string;
          });
      },
})