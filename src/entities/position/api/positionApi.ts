import { baseApi } from 'shared/api'
import { mapPosition } from '../lib/mapUser'
import { positionRoutes } from './positionRoutes'
import { ResponsePositions, ResponsePositionsDto } from './types'

export const positionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    positions: build.query<ResponsePositions, void>({
      query: () => ({ url: positionRoutes.POSITIONS }),
      transformResponse: (response: ResponsePositionsDto) => ({
        positions: response.positions.map(mapPosition),
      }),
    }),
  }),
})

export const { usePositionsQuery } = positionApi
