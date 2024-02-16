import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from 'services/rentCarApi';

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
