import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllBrands,
  fetchAllCategories,
  fetchAllProductByFilter,
  fetchAllProducts,
  fetchProductByFilters,
} from "./productAPI";
import { useSelector } from "react-redux";

const initialState = {
  products: [],
  categories: [],
  brands: [],
 
  status: "idle",
  totalCount: 0,
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProducts ",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchAllProductByFilterAsync = createAsyncThunk(
  "product/fetchAllProductByFilter ",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductByFilters(filter, sort, pagination);
    return response.data;
  }
);

export const fetchAllCategoriesAsync = createAsyncThunk(
  "product/fetchAllCategories ",
  async () => {
    const response = await fetchAllCategories();
    return response.data;
  }
);

export const fetchAllBrandsAsync = createAsyncThunk(
  "product/fetchAllBrands ",
  async () => {
    const response = await fetchAllBrands();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.product;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchAllCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(fetchAllBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      });
  },
});


export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export const selectTotalCount = (state) => state.product.totalCount;

export const selectAllCategories = (state) => state.categories;

export const selectAllBrands = (state) => state?.brands;

export default productSlice.reducer;
