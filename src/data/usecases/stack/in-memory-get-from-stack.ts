import { StackRepository } from '../../repositories/index'
import { GetFromStack } from '../../../domain/usecases/stack'

export class InMemoryGetFromStack implements GetFromStack {
  constructor (
    private readonly stackRepository: StackRepository
  ) { }

  get (): void {
    return this.stackRepository.get()
  }
}
