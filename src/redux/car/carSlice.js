import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchByBrandThunk, getCarsThunk } from './operation';

const carsInitialState = {
  cars: [],
  favorites: [],
  page: 1,
  isLoading: false,
  isFavorited: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: carsInitialState,
  reducers: {
    addFavoriteCar: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    deleteFavoriteCar: {
      reducer(state, action) {
        state.favorites = state.favorites.filter(
          car => car.id !== action.payload
        );
      },
    },
    loadPage: {
      reducer(state) {
        state.page = state.page + 1;
      },
    },
    resetStateCars: {
      reducer(state) {
        state.page = 1;
        state.cars = [];
      },
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload];
      })
      .addCase(fetchByBrandThunk.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(getCarsThunk.pending, fetchByBrandThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getCarsThunk.rejected, fetchByBrandThunk.rejected),
        handleRejected
      ),
});

export const { addFavoriteCar, deleteFavoriteCar, resetStateCars, loadPage } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
