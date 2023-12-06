import { Position } from '../model/types'

export type ResponsePositionsDto = {
  positions: PositionDto[]
}

export type ResponsePositions = {
  positions: Position[]
}

export type PositionDto = {
  id: number
  name: string
}
