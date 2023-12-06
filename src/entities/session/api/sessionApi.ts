import { baseApi } from 'shared/api'
import { mapSession } from '../lib/mapSession'
import { type Session } from '../model/types'
import { sessionRoutes } from './sessionRoutes'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    token: build.query<Session, void>({
      query: () => ({ url: sessionRoutes.TOKEN }),
      transformResponse: mapSession,
    }),
  }),
})

export const { useTokenQuery } = sessionApi
