import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {charactersReducer} from "./heroes/heroSlice";
import rootSaga from "./rootSagas"; 

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({  
  characters: charactersReducer, 
}
);

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
