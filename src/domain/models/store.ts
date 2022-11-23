export interface Store {
  content: {
    [key: string]: {
      value: any
      timestamp: number
      ttl: number
    }
  }
}
