import { AddToStackParams } from '../../domain/usecases/stack'

export interface StackRepository {
  add: (params: AddToStackParams) => void
  get: () => any
}
