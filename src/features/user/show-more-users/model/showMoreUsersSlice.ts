import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from 'entities/user'
import { showMoreUsersThunk } from './showMoreUsersThunk'

const initialState: { isLoading: boolean; page: number; users: User[] } = {
  isLoading: false,
  page: 1,
  users: [],
}

export const showMoreUsersSlice = createSlice({
  name: 'showMoreUsers',
  initialState,
  reducers: {
    clearShowMoreUsersData: (state, action: PayloadAction<void>) => {
      state.page = initialState.page
      state.users = initialState.users
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showMoreUsersThunk.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(showMoreUsersThunk.rejected, (state, action) => {
        state.isLoading = false
      })
      .addCase(showMoreUsersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.users = [...state.users, ...payload]
      })
  },
})

export const { clearShowMoreUsersData, setPage } = showMoreUsersSlice.actions

export const selectShowMoreUsersIsLoading = (state: RootState) => state.showMoreUsers.isLoading
export const selectShowMoreUsers = (state: RootState) => state.showMoreUsers.users
