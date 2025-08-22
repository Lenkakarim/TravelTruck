import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campers: [],
  filters: {},
  favorites: [],
};

const camperSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setCampers(state, action) {
      state.campers = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
  },
});

export const {
  setCampers,
  setFilters,
  addFavorite,
  removeFavorite,
} = camperSlice.actions;

export default configureStore({
  reducer: combineReducers({
    campers: camperSlice.reducer,
  }),
});
