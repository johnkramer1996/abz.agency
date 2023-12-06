import { createApi } from '@reduxjs/toolkit/query/react'
import { USER_TAG } from './tags'
import { baseQuery } from './baseQuery'

export const baseApi = createApi({
  tagTypes: [USER_TAG],
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
