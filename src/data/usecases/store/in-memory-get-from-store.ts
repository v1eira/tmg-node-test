import { StoreRepository } from '../../repositories/index'
import { GetFromStore, GetFromStoreParams } from '../../../domain/usecases/store'

export class InMemoryGetFromStore implements GetFromStore {
  constructor (
    private readonly storeRepository: StoreRepository
  ) { }

  get (params: GetFromStoreParams): void {
    return this.storeRepository.get(params)
  }
}
