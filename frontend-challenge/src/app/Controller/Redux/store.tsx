import { configureStore } from '@reduxjs/toolkit'
import MarvelApiSlice from './Marvel_api/Marvel_api_slice'
export default configureStore({
  reducer: {
    MarvelApiSlice: MarvelApiSlice
  }
})