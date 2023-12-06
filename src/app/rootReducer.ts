import { combineReducers } from '@reduxjs/toolkit'
import { sessionSlice } from 'entities/session'
import { showMoreUsersSlice } from 'features/user/show-more-users'
import { baseApi } from 'shared/api'

export const rootReducer = combineReducers({
  [showMoreUsersSlice.name]: showMoreUsersSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
