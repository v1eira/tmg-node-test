import * as yup from 'yup'

export const getFromStoreYupSchema = (): yup.ObjectSchema<any> => {
  return yup.object().shape({
    key: yup.string().required()
  })
}
