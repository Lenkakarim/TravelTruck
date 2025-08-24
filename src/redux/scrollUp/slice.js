import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: { scrollY: 0 },
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollY = action.payload;
    },
  },
});

export const { setScrollPosition } = scrollSlice.actions;
export default scrollSlice.reducer;
