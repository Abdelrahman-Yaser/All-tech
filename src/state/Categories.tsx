import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Categorie } from "../interface";
import { fetchData as fetchCategoriesData } from "../apis/queryKeys/Categories";


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

const fetchData = createAsyncThunk('categories/fetchData', async () => {
    const response = await fetchCategoriesData();
    return response;
});

const categoriesSlice = createSlice({
    name: 'categories',
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
});

export default categoriesSlice.reducer;