import { type UserDto } from '../../user/api/types'
import { type User } from '../model/types'

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id,
    email: dto.email,
    name: dto.name,
    phone: dto.phone,
    photo: dto.photo,
    position: dto.position,
    positionId: dto.position_id,
    registrationTimestamp: dto.registration_timestamp,
  }
}
