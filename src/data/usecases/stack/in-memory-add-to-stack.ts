import { StackRepository } from '../../repositories/index'
import { AddToStack, AddToStackParams } from '../../../domain/usecases/stack'

export class InMemoryAddToStack implements AddToStack {
  constructor (
    private readonly stackRepository: StackRepository
  ) { }

  add (params: AddToStackParams): void {
    this.stackRepository.add(params)
  }
}
