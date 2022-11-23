export interface DeleteFromStoreParams {
  key: string
}

export interface DeleteFromStore {
  delete: (params: DeleteFromStoreParams) => void
}
