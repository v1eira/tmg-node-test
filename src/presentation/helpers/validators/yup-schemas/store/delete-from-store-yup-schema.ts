import * as yup from 'yup'

export const deleteFromStoreYupSchema = (): yup.ObjectSchema<any> => {
  return yup.object().shape({
    key: yup.string().required()
  })
}
