import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchema } from '../../utils/validation';


const Signup = () => {

    const formik = useFormik({
        initialValues: {
            fName:'',
            lName:'',
            email:'',
            password:'',
            cPassword:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
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
                <Card sx={{ minWidth: 275, minHeight: 550, height: 'auto', width: '80%', boxShadow: 2 }}>
                    <Grid container>
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
                                        Sign up
                                    </Typography>
                                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                                        <Grid container spacing={3} >
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="fName"
                                                    required
                                                    fullWidth
                                                    id="fName"
                                                    label="First Name"
                                                    autoFocus
                                                    variant='standard'
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.fName && Boolean(formik.errors.fName)}
                                                    helperText={formik.touched.fName && formik.errors.fName}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="lName"
                                                    label="Last Name"
                                                    name="lName"
                                                    autoComplete="family-name"
                                                    variant='standard'
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.lName && Boolean(formik.errors.lName)}
                                                    helperText={formik.touched.lName && formik.errors.lName}
                                                />
                                            </Grid>
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
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="cPassword"
                                                    label="Confirm Password"
                                                    type="password"
                                                    id="cPassword"
                                                    autoComplete="new-password"
                                                    variant='standard'
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.cPassword && Boolean(formik.errors.cPassword)}
                                                    helperText={formik.touched.cPassword && formik.errors.cPassword}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 5, mb: 2 }}
                                        >
                                            Sign Up
                                        </Button>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item>
                                                <Link variant="body2">
                                                    Already have an account? Sign in
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundImage: 'url(https://via.placeholder.com/400x600)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                    width: '100%',
                                }}
                            ></Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Container>
    );
};

export default Signup;
