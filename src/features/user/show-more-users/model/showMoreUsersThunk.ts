import { createAsyncThunk } from '@reduxjs/toolkit'
import { userApi } from 'entities/user'
import { User } from 'entities/user'
import { setPage } from './showMoreUsersSlice'

type Params = {
  count: number
  offset: number
}

export const showMoreUsersThunk = createAsyncThunk<User[], Params, { state: RootState }>(
  'users/show-more',
  async ({ count, offset }: Params, { dispatch, getState }) => {
    const page = getState().showMoreUsers.page
    const newOffset = count * page + offset
    dispatch(setPage(page + 1))
    dispatch(userApi.util.prefetch('users', { count, offset: newOffset + count }, { force: true }))
    const data = await dispatch(userApi.endpoints.users.initiate({ count, offset: newOffset })).unwrap()
    return data.users
  },
)
