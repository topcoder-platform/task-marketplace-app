import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useSelector as nativeUseSelector } from 'react-redux'
import { authSlice } from './reducers/auth'
import { tasksSlice } from './reducers/tasks'
import { filterSlice } from './reducers/filter'
import { errorSlice } from './reducers/error'
import { Auth } from './models/auth'
import { Tasks } from './models/tasks'
import { Filter } from './models/filter'
import { Error } from './models/error'

// Combining all the reducers
export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [tasksSlice.name]: tasksSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
  [errorSlice.name]: errorSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})

export const useSelector = nativeUseSelector

export interface IState {
  [authSlice.name]: Auth;
  [tasksSlice.name]: Tasks;
  [filterSlice.name]: Filter;
  [errorSlice.name]: Error;
}
