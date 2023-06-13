import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "heroes",
  initialState:[],
  reducers: {
    //_ = significa que o valor nao vai ser usado, no caso o state nao esta sendo usado
    setHeroes: (_, action) => {
      return action.payload;
    },
  },
});

export const { setHeroes } = heroSlice.actions;
export default heroSlice.reducer;
