import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCarsThunk } from './operation';

const carsInitialState = {
  cars: [],
  favorites: [],
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
  },
  extraReducers: builder =>
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload];
      })

      .addMatcher(isAnyOf(getCarsThunk.pending), handlePending)
      .addMatcher(isAnyOf(getCarsThunk.rejected), handleRejected),
});

export const { addFavoriteCar, deleteFavoriteCar } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
