import * as yup from 'yup'

export const addToStackYupSchema = (): yup.ObjectSchema<any> => {
  return yup.object().shape({
    value: yup.mixed().required()
  })
}
