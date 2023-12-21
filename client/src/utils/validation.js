import * as Yup from 'yup';

export const validationSchema = Yup.object({
    fName: Yup.string()
        .trim()
        .required('FIrst name required')
        .max(15, 'Must be 15 characters or less'),
    lName: Yup.string()
        .trim()
        .required('Last name required')
        .max(15, 'Must be 15 characters or less'),
    email: Yup.string()
        .trim()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .trim()
        .min(8, 'password must be at least 8 charecters')
        .required("Password is required")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    cPassword: Yup.string()
        .trim()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .trim()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .trim()
        .min(8, 'password must be at least 8 charecters')
        .required("Password is required")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
        ),
});