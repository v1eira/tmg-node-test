import { makeStackController } from '../main/factories/stack-factory'
import { InvalidParamError } from '../presentation/errors'
import { HttpRequest } from '../presentation/protocols'

const stackController = makeStackController()

describe('Stack Controller', () => {
  describe('Call using correct params', () => {
    it('Should call "add" correctly', async () => {
      const req: HttpRequest = {
        body: { value: 1 }
      }
      const response = await stackController.add(req)
      expect(response).toHaveProperty('statusCode')
      expect(response.statusCode).toBe(200)
    })

    it('Should call "get" correctly', async () => {
      const req: HttpRequest = {}
      const response = await stackController.get(req)
      expect(response).toHaveProperty('statusCode')
      expect(response.statusCode).toBe(200)
    })
  })

  describe('Call with invalid params', () => {
    it('Should call "add" with invalid param', async () => {
      const req: HttpRequest = {
        body: { vale: 1 }
      }
      const err = await stackController.add(req)
      expect(err).toHaveProperty('statusCode')
      expect(err.statusCode).toBe(400)
      expect(err.body).toBeInstanceOf(InvalidParamError)
    })
  })
})
