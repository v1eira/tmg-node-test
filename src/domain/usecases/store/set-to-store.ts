export interface SetToStoreParams {
  key: string
  value: any
  ttl: number
}

export interface SetToStore {
  set: (params: SetToStoreParams) => void
}
