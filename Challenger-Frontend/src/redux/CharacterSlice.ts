import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "heroes",
  initialState:[],
  reducers: {
    setHeroes: (_, action) => {
      return action.payload;
    },
  },
});

export const { setHeroes } = heroSlice.actions;
export default heroSlice.reducer;
