export interface GetFromStoreParams {
  key: string
}

export interface GetFromStore {
  get: (params: GetFromStoreParams) => any
}
