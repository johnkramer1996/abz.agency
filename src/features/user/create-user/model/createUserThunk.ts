import { createAsyncThunk } from '@reduxjs/toolkit'
import { userApi } from 'entities/user'
import { CreateUserFormSchema } from './createUserFormSchema'
import { objectToFormData } from 'shared/lib'
import { clearShowMoreUsersData } from 'features/user/show-more-users'

export const createUserThunk = createAsyncThunk<void, CreateUserFormSchema, { state: RootState }>(
  'authentication/login',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const body = objectToFormData(data)
      dispatch(clearShowMoreUsersData())
      await dispatch(userApi.endpoints.createUser.initiate({ body })).unwrap()
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)
