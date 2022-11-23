import { StoreRepository } from '../../repositories/index'
import { SetToStore, SetToStoreParams } from '../../../domain/usecases/store'

export class InMemorySetToStore implements SetToStore {
  constructor (
    private readonly storeRepository: StoreRepository
  ) { }

  set (params: SetToStoreParams): void {
    this.storeRepository.set(params)
  }
}
