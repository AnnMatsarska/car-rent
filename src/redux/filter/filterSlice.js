import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setCarFilters: {
      reducer(state, action) {
        return { ...state, ...action.payload };
      },
    },
  },
});

export const { setCarFilters } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
