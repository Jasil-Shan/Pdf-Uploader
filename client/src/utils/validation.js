import * as Yup from 'yup';

export const validationSchema = Yup.object({
    fName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Required'),
    lName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'password must be at least 8 charecters')
        .required("Password is required")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is Required')
});


