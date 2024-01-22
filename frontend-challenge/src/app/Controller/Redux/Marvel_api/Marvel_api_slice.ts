import { createSlice } from "@reduxjs/toolkit";
import { InitialStateCharacters } from "../../Interfaces/IResponseAllCharacters";
import {
  fetchCharactersData,
  fetchCharactersDataForId,
  fetchAllComicsData,
  fetchComicForId,
} from "../../API";

export const MarvelApiSlice = createSlice({
  name: "MarvelApiSlice",
  initialState: {
    charactersData: InitialStateCharacters,
    status: "loading",
    characterid: [],
    comics: [],
    comicForId: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    const setLoadingState = (state:any) => {
      state.status = "loading";
    };

    const setSucceededState = (state:any, action:any) => {
      state.status = "succeeded";
      return action.payload;
    };

    const setFailedState = (state:any) => {
      state.status = "failed";
    };

    builder
      .addCase(fetchCharactersData.pending, setLoadingState)
      .addCase(fetchCharactersData.fulfilled, (state, action) => {
        state.charactersData = setSucceededState(state, action);
      })
      .addCase(fetchCharactersData.rejected, setFailedState)
      .addCase(fetchCharactersDataForId.pending, setLoadingState)
      .addCase(fetchCharactersDataForId.fulfilled, (state, action) => {
        state.characterid = setSucceededState(state, action);
      })
      .addCase(fetchCharactersDataForId.rejected, setFailedState)
      .addCase(fetchAllComicsData.pending, setLoadingState)
      .addCase(fetchAllComicsData.fulfilled, (state, action) => {
        state.comics = setSucceededState(state, action);
      })
      .addCase(fetchAllComicsData.rejected, setFailedState)
      .addCase(fetchComicForId.pending, setLoadingState)
      .addCase(fetchComicForId.fulfilled, (state, action) => {
        state.comicForId = setSucceededState(state, action);
      })
      .addCase(fetchComicForId.rejected, setFailedState);
  },
});

export default MarvelApiSlice.reducer;
