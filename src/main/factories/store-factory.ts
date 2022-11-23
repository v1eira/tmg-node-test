import { InMemorySetToStore } from '../../data/usecases/store/in-memory-set-to-store'
import { InMemoryGetFromStore } from '../../data/usecases/store/in-memory-get-from-store'
import { InMemoryDeleteFromStore } from '../../data/usecases/store/in-memory-delete-from-store'
import { InMemoryStoreRepository } from '../../infra/repositories/in-memory-store-repository'
import { StoreController } from '../../presentation/controllers/store-controller'
import { makeStoreValidation } from './store-validation-factory'

export const makeStoreController = (): StoreController => {
  const storeRepository = new InMemoryStoreRepository()
  const inMemorySetToStore = new InMemorySetToStore(storeRepository)
  const inMemoryGetFromStore = new InMemoryGetFromStore(storeRepository)
  const inMemoryDeleteFromStore = new InMemoryDeleteFromStore(storeRepository)
  const storeController = new StoreController(inMemorySetToStore, inMemoryGetFromStore, inMemoryDeleteFromStore, makeStoreValidation())
  return storeController
}
