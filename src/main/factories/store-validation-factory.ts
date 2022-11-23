import { YupValidation } from '../../presentation/helpers/validators/yup-validation'
import { setToStoreYupSchema, getFromStoreYupSchema, deleteFromStoreYupSchema } from '../../presentation/helpers/validators/yup-schemas'
import { Validation } from '../../presentation/protocols'

export const makeStoreValidation = (): Validation[] => {
  const validations: Validation[] = []
  validations.push(new YupValidation(setToStoreYupSchema()))
  validations.push(new YupValidation(getFromStoreYupSchema()))
  validations.push(new YupValidation(deleteFromStoreYupSchema()))
  return validations
}
