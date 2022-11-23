import { StackRepository } from '../../data/repositories'
import { Stack } from '../../domain/models/stack'
import { AddToStackParams } from '../../domain/usecases/stack'

export class InMemoryStackRepository implements StackRepository {
  constructor (
    public stack: Stack = { content: [] }
  ) {
    this.stack.content = []
  }
  
  add (params: AddToStackParams): void {
    this.stack.content.push(params.value)
    return
  }
  
  get (): any {
    return this.stack.content.pop() || null
  }
}
