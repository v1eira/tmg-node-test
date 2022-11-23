import { SetToStore, GetFromStore, DeleteFromStore } from '../../domain/usecases/store/index'
import { badRequest, ok, serverError } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Validation } from '../protocols'

export class StoreController {
  constructor (
    private readonly setToStore: SetToStore,
    private readonly getFromStore: GetFromStore,
    private readonly deleteFromStore: DeleteFromStore,
    private readonly validations: Validation[]
  ) {}

  async set (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validations[0].validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { key, value, ttl } = httpRequest.body
      await this.setToStore.set({ key, value, ttl })
      return ok(null)
    } catch (error) {
      return serverError(error as Error)
    }
  }

  async get (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validations[1].validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { key } = httpRequest.body
      const value = await this.getFromStore.get({ key })
      return ok(value)
    } catch (error) {
      return serverError(error as Error)
    }
  }

  async delete (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validations[2].validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { key } = httpRequest.body
      await this.deleteFromStore.delete({ key })
      return ok(null)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
