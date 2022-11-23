// import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { Express, Request, Response, Router } from 'express'
import { HttpRequest, HttpResponse } from '../presentation/protocols'
import { makeStackController } from './factories/stack-factory'
import { makeStoreController } from './factories/store-factory'

export default (app: Express): void => {
  const router = Router()
  app.use('', router)

  const stackController = makeStackController()
  const storeController = makeStoreController()

  const createHttpRequest = (req: Request) => {
    const httpRequest: HttpRequest = {
      body: (req.body || {}),
      params: (req.params || {}),
      query: (req.query || {}),
      headers: (req.headers || {})
    }

    return httpRequest
  }

  const createHttpResponse = (res: Response, httpResponse: HttpResponse, sendEmptyBody: boolean = false) => {
    if (httpResponse.statusCode == 200) {
      if (!httpResponse.body && !sendEmptyBody){
        res.status(httpResponse.statusCode).send()
      } else {
        res.status(httpResponse.statusCode).json(httpResponse.body)
      }
    } else {
      res.status(httpResponse.statusCode).json({ error: httpResponse.body.message })
    }
  }

  // Stack
  router.post('/stack/add', async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = createHttpRequest(req)
    const httpResponse = await stackController.add(httpRequest)
    createHttpResponse(res, httpResponse)
  })
  router.get('/stack/get', async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = createHttpRequest(req)
    const httpResponse = await stackController.get(httpRequest)
    createHttpResponse(res, httpResponse, true)
  })

  // Store
  router.post('/store/set', async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = createHttpRequest(req)
    const httpResponse = await storeController.set(httpRequest)
    createHttpResponse(res, httpResponse)
  })
  router.post('/store/get', async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = createHttpRequest(req)
    const httpResponse = await storeController.get(httpRequest)
    createHttpResponse(res, httpResponse, true)
  })
  router.delete('/store/delete', async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = createHttpRequest(req)
    const httpResponse = await storeController.delete(httpRequest)
    createHttpResponse(res, httpResponse)
  })
}
