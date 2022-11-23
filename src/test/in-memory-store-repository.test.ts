import { InMemoryStoreRepository } from '../infra/repositories/in-memory-store-repository'

jest.useFakeTimers()
const storeRepository = new InMemoryStoreRepository()

describe('Store Repository', () => {
  it('Should add value to store', () => {
    storeRepository.set({ key: 'name', value: 'James', ttl: null })
    expect(storeRepository.store.content).toHaveProperty('name')
    expect(storeRepository.store.content.name).toHaveProperty('value')
    expect(storeRepository.store.content.name.value).toBe('James')
  })

  it('Should get value from store', () => {
    storeRepository.store.content = { name: { timestamp: 1667953056108, ttl: 0, value: 'James' } }
    expect(storeRepository.get({ key: 'name' })).toBe('James')
  })

  it('Should get value from store while within time', async () => {
    storeRepository.store.content = { name: { timestamp: Date.now(), ttl: 5 * 1000, value: 'James' } }
    jest.advanceTimersByTime(1000)
    expect(storeRepository.get({ key: 'name' })).toBe('James')
    jest.advanceTimersByTime(1000)
    expect(storeRepository.get({ key: 'name' })).toBe('James')
    jest.advanceTimersByTime(1000)
    expect(storeRepository.get({ key: 'name' })).toBe('James')
  })

  it('Should not get value from store after ttl', async () => {
    storeRepository.store.content = { name: { timestamp: Date.now(), ttl: 5 * 1000, value: 'James' } }
    jest.advanceTimersByTime(7000)
    expect(storeRepository.get({ key: 'name' })).toBeNull()
  })

  it('Should get nothing from empty store', () => {
    storeRepository.store.content = {}
    expect(storeRepository.get({ key: 'name' })).toBeNull()
  })

  it('Should delete value from store', () => {
    storeRepository.store.content = {
      name: { timestamp: 1667953056108, ttl: 0, value: 'James' },
      age: { timestamp: 1667953056108, ttl: 0, value: 21 }
    }
    storeRepository.delete({ key: 'name' })
    expect(storeRepository.store.content).not.toHaveProperty('name')
    expect(storeRepository.store.content).toHaveProperty('age')
  })

  it('Should not delete value from empty store', () => {
    storeRepository.store.content = {}
    storeRepository.delete({ key: 'name' })
    expect(storeRepository.store.content).toStrictEqual({})
  })
})
