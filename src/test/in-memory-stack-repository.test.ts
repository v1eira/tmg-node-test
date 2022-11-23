import { InMemoryStackRepository } from '../infra/repositories/in-memory-stack-repository'

const stackRepository = new InMemoryStackRepository()

describe('Stack Repository', () => {
  it('Should add value to stack', () => {
    stackRepository.add({ value: 1 })
    expect(stackRepository.stack.content).toStrictEqual([1])
  })
  
  it('Should get value from stack', () => {
    stackRepository.stack.content = [1]
    expect(stackRepository.get()).toBe(1)
  })

  it('Should get nothing from empty stack', () => {
    stackRepository.stack.content = []
    expect(stackRepository.get()).toBeNull()
  })
})