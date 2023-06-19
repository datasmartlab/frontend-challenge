import { configureStore, combineReducers } from "@reduxjs/toolkit";
import heroReducer from "./CharacterSlice";

const rootReducer = combineReducers({
  heroes: heroReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
