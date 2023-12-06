import { PositionDto } from '../api/types'
import { type Position } from '../model/types'

export function mapPosition(dto: PositionDto): Position {
  return {
    id: dto.id,
    name: dto.name,
  }
}
