import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllCars, fetchByBrand } from 'services/rentCarApi';

export const getCarsThunk = createAsyncThunk(
  'cars/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await fetchAllCars(page, limit);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchByBrandThunk = createAsyncThunk(
  'cars/fetchByBrand',
  async ({ brand, price, mileageFrom, mileageTo }, thunkAPI) => {
    try {
      const response = await fetchByBrand({
        brand,
        price,
        mileageFrom,
        mileageTo,
      });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
