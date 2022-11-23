import { StoreRepository } from '../../repositories/index'
import { DeleteFromStore, DeleteFromStoreParams } from '../../../domain/usecases/store'

export class InMemoryDeleteFromStore implements DeleteFromStore {
  constructor (
    private readonly storeRepository: StoreRepository
  ) { }

  delete (params: DeleteFromStoreParams): void {
    this.storeRepository.delete(params)
  }
}
