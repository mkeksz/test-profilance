import { combineReducers } from 'redux'
import appReducer from './reducers/appReducer'
import userReducer from './reducers/userReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
})
