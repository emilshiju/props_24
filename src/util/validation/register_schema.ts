import * as Yup from 'yup';



const registerSchema = Yup.object({

    userName: Yup.string()
        .min(3, 'User ID must be at least 3 characters')
        .max(20, 'User ID must not exceed 20 characters')
        .matches(/^[a-zA-Z0-9_]+$/, 'User ID can only contain letters, numbers, and underscores')
        .required('User ID is required'),
   
    email: Yup.string()
      .email('Invalid email address')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        { message: 'Please enter a valid email address'}
      )
      .required('Email is required'),
      
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),

  });



  export default registerSchema