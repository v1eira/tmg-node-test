import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'
import * as yup from 'yup'

export class YupValidation implements Validation {
  constructor (
    private readonly schema: yup.ObjectSchema<any>
  ) {}

  async validate (input: any): Promise<Error> {
    try {
      await this.schema.validate(input)
    } catch (err) {
      return new InvalidParamError(err)
    }
  }
}
