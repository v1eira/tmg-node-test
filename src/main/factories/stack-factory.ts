import { InMemoryAddToStack } from "../../data/usecases/stack/in-memory-add-to-stack"
import { InMemoryGetFromStack } from "../../data/usecases/stack/in-memory-get-from-stack"
import { InMemoryStackRepository } from "../../infra/repositories/in-memory-stack-repository"
import { StackController } from "../../presentation/controllers/stack-controller"
import { makeStackValidation } from "./stack-validation-factory"

export const makeStackController = (): StackController => {
  const stackRepository = new InMemoryStackRepository()
  const inMemoryAdd = new InMemoryAddToStack(stackRepository)
  const inMemoryGet = new InMemoryGetFromStack(stackRepository)
  const stackController = new StackController(inMemoryAdd, inMemoryGet, makeStackValidation())
  return stackController
}