import { User } from '../model/types'

export type ResponseUsersDto = {
  count: number
  links: { next_url: string; prev_url: string }
  page: number
  success: boolean
  total_pages: number
  total_users: number
  users: UserDto[]
}

export type ResponseUsers = {
  count: number
  links: { nextUrl: string; prevUrl: string }
  page: number
  success: boolean
  totalPages: number
  totalUsers: number
  isLastPage: boolean
  users: User[]
}

export type UserDto = {
  id: number
  email: string
  name: string
  phone: string
  photo: string
  position: string
  position_id: number
  registration_timestamp: number
}

export type FindUsersParams = {
  count?: number
  page?: number
  offset?: number
}

export type CreateUserBody = {
  body: FormData
}
