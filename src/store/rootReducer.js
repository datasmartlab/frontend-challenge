import { combineReducers } from 'redux'
import heroReducer from './Hero/heroReducers'

const rootReducer = combineReducers({
  hero: heroReducer,
})

export default rootReducer
