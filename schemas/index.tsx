import * as yup from 'yup'
import 'yup-phone'

export const basicSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().min(5).required(),
  mobile: yup.string().phone().required(),
})
