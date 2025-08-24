import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamper } from "./operations";

const initialState = {
  items: [],
  camperDetails: null,
  currentPage: 1,
  params: "",
  totalItems: 0,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setParams: (state, action) => {
      state.currentPage = initialState.currentPage;
      state.params = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllCampers.fulfilled,
        (state, action) => {
          state.items =
            state.currentPage > 1
              ? [...state.items, ...action.payload.items]
              : action.payload.items;
          state.totalItems = action.payload.total;
        }
      )
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.camperDetails = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchAllCampers.pending,
          fetchCamper.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllCampers.fulfilled,
          fetchCamper.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllCampers.rejected,
          fetchCamper.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload || "Unexpected error";
        }
      );
  },
});

export const { setCurrentPage, setParams } =
  campersSlice.actions;
export default campersSlice.reducer;
