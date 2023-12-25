import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../../utils/validation';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../redux/slices/authSlice';
import { toast } from 'react-toastify';
import { login } from '../../../services/authService';


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
            try {
                const { data } = await login(values)
                dispatch(loginSuccess(data.user))
                data.status ? navigate('/') : toast.error(data.message, {
                    position: "top-center"
                })
            } catch (error) {
                console.error('Signup Failed', error.message)
            }
        },
    });

    return (
        <Container>
            <Box
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <Card sx={{ minWidth: 275, minHeight: 550, height: 'auto ', width: '70%', boxShadow: 2 }}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundImage: 'url(https://res.cloudinary.com/dlhldjuis/image/upload/v1703486237/many_files_floating_in_the_beautiful_natural_background_dklnyl.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '130%',
                                    width: '100%',
                                }}
                            ></Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardContent>
                                <Box
                                    sx={{
                                        marginTop: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                                    <Typography component="h1" variant="h5">
                                        Login
                                    </Typography>
                                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ m: 2 }}>
                                        <Grid container spacing={5} >
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    variant='standard'
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                                    helperText={formik.touched.email && formik.errors.email}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="new-password"
                                                    variant='standard'
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                                    helperText={formik.touched.password && formik.errors.password}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 8, mb: 5 }}
                                        >
                                            Sign Up
                                        </Button>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item>
                                                <Link to={'/signup'} variant="body2" style={{ fontFamily: 'serif',color:'black' ,}}>
                                                    Still not registered? Sign up
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Grid>

                    </Grid>
                </Card>
            </Box>
        </Container>
    );
};

export default Login;
