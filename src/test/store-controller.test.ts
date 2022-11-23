import { makeStoreController } from '../main/factories/store-factory'
import { InvalidParamError } from '../presentation/errors'
import { HttpRequest } from '../presentation/protocols'

const storeController = makeStoreController()

describe('Store Controller', () => {
  describe('Call using correct params', () => {
    it('Should call "set" correctly', async () => {
      const req: HttpRequest = {
        body: {
          key: "name",
          value: "Larry",
          ttl: 5
        }
      }
      const response = await storeController.set(req)
      expect(response).toHaveProperty('statusCode')
      expect(response.statusCode).toBe(200)
    })

    it('Should call "get" correctly', async () => {
      const req: HttpRequest = {
        body: { key: "name" }
      }
      const response = await storeController.get(req)
      expect(response).toHaveProperty('statusCode')
      expect(response.statusCode).toBe(200)
    })

    it('Should call "delete" correctly', async () => {
      const req: HttpRequest = {
        body: { key: "name" }
      }
      const response = await storeController.delete(req)
      expect(response).toHaveProperty('statusCode')
      expect(response.statusCode).toBe(200)
    })
  })

  describe('Call with invalid params', () => {
    it('Should call "set" with invalid params', async () => {
      const req: HttpRequest = {
        body: {
          key: "name",
          vale: "Larry",
          TTL: 5
        }
      }
      const err = await storeController.set(req)
      expect(err).toHaveProperty('statusCode')
      expect(err.statusCode).toBe(400)
      expect(err.body).toBeInstanceOf(InvalidParamError)
    })

    it('Should call "get" with invalid param', async () => {
      const req: HttpRequest = {
        body: { entry: "name" }
      }
      const err = await storeController.get(req)
      expect(err).toHaveProperty('statusCode')
      expect(err.statusCode).toBe(400)
      expect(err.body).toBeInstanceOf(InvalidParamError)
    })

    it('Should call "delete" with invalid param', async () => {
      const req: HttpRequest = {
        body: { entry: "name" }
      }
      const err = await storeController.delete(req)
      expect(err).toHaveProperty('statusCode')
      expect(err.statusCode).toBe(400)
      expect(err.body).toBeInstanceOf(InvalidParamError)
    })
  })
})