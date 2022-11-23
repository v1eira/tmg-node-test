import { DeleteFromStoreParams, GetFromStoreParams, SetToStoreParams } from '../../domain/usecases/store'

export interface StoreRepository {
  set: (params: SetToStoreParams) => void
  get: (params: GetFromStoreParams) => any
  delete: (params: DeleteFromStoreParams) => void
}
