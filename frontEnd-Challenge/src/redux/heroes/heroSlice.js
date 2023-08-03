import { createSlice } from "@reduxjs/toolkit";
import heroReducer from "./heroReducer";

const initialState = {
  //Estados iniciais
  loading: false,
  data: [],
  error: null,
  offset: 0,
  limit: 21,
  total: 0,
  heroInfo: null,
};

const sliceCharacters = createSlice({
  name: "characters",
  initialState,
  reducers: heroReducer,
});

export const { actions: charactersActions } = sliceCharacters;
export const charactersReducer = sliceCharacters.reducer;
