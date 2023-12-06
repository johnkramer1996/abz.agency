import { baseApi, USER_TAG } from 'shared/api'
import { mapUser } from '../lib/mapUser'
import { userRoutes } from './userRoutes'
import { CreateUserBody, FindUsersParams, ResponseUsers, ResponseUsersDto } from './types'

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query<ResponseUsers, FindUsersParams>({
      query: (params) => ({ url: userRoutes.USERS, params }),
      providesTags: [USER_TAG],
      transformResponse: (response: ResponseUsersDto) => ({
        count: response.count,
        links: { nextUrl: response.links.next_url, prevUrl: response.links.prev_url },
        success: response.success,
        page: response.page,
        totalPages: response.total_pages,
        totalUsers: response.total_users,
        isLastPage: response.page === response.total_pages,
        users: response.users.map(mapUser),
      }),
    }),
    createUser: build.mutation<void, CreateUserBody>({
      query: ({ body }) => ({ url: userRoutes.CREATE_USER, method: 'POST', body }),
      invalidatesTags: [USER_TAG],
    }),
  }),
})

export const { useUsersQuery, useCreateUserMutation } = userApi
