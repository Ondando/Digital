import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/getAllProduct",
  async (thunkApi) => {
    const response = await fetch("http://localhost:3001/product");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  entities: [],
  loading: false,
} as any;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(...action.payload);
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default productSlice.reducer;
