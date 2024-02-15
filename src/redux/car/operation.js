import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from 'services/rentCarApi';

export const getCarsThunk = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllCars();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
