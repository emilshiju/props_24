import * as Yup from 'yup';



const loginSchema=Yup.object({
    role: Yup.string().required('Please select your role'),
    email:Yup.string()
        .email('Invalid email address')
        .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            {message: 'Please enter a valid email address'}
        )
        .required('Email is required'),

    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    
})

export default loginSchema