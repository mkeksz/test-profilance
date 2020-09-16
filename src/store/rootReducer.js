import { combineReducers } from 'redux'
import appReducer from './reducers/appReducer'
import userReducer from './reducers/userReducer'
import newsReducer from "./reducers/newsReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  news: newsReducer
})
