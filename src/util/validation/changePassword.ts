import * as Yup from 'yup';

const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .required('Field is required'),
  
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Field is required'),
});

export default resetPasswordSchema;
