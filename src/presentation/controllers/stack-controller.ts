import { AddToStack, GetFromStack } from '../../domain/usecases/stack/index'
import { badRequest, ok, serverError } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Validation } from '../protocols'

export class StackController {
  constructor (
    private readonly addToStack: AddToStack,
    private readonly getFromStack: GetFromStack,
    private readonly validation: Validation
  ) {}

  async add (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { value } = httpRequest.body
      await this.addToStack.add({ value })
      return ok(null)
    } catch (error) {
      return serverError(error as Error)
    }
  }

  async get (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const value = await this.getFromStack.get()
      return ok(value)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
