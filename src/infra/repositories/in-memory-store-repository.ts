import { StoreRepository } from '../../data/repositories'
import { Store } from '../../domain/models/store'
import { DeleteFromStoreParams, GetFromStoreParams, SetToStoreParams } from '../../domain/usecases/store'

export class InMemoryStoreRepository implements StoreRepository {
  constructor (
    public store: Store = { content: {} }
  ) {
    this.store.content = {}
  }
  
  set (params: SetToStoreParams): void {
    this.store.content[params.key] = { value: params.value, timestamp: Date.now(), ttl: params.ttl * 1000 }
    return
  }
  
  get (params: GetFromStoreParams): any {
    const entry = this.store.content[params.key]
    let value = null
    if (entry && (!entry.ttl || (Date.now() - entry.ttl <= entry.timestamp))) {
        value = entry.value
    }
    return value
  }

  delete (params: DeleteFromStoreParams): any {
    delete this.store.content[params.key]
    return null
  }
}