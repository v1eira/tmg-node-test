import * as yup from 'yup'

export const setToStoreYupSchema = (): yup.ObjectSchema<any> => {
  return yup.object().shape({
    key: yup.string().required(),
    value: yup.mixed().required(),
    ttt: yup.number().optional(),
  })
}
