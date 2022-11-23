import { YupValidation } from '../../presentation/helpers/validators/yup-validation'
import { addToStackYupSchema } from '../../presentation/helpers/validators/yup-schemas'
import { Validation } from '../../presentation/protocols'

export const makeStackValidation = (): Validation => {
  const validation: Validation = new YupValidation(addToStackYupSchema())
  return validation
}
