import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from 'shared/lib'

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).session.accessToken

    if (accessToken) headers.set('Token', `${accessToken}`)

    return headers
  },
})
