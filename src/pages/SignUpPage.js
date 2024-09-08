import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {useSignUp} from "../hooks/useAppAPIs";
import {useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                CORA'L
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUpPage() {

    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();
    const signUpMutation = useSignUp();
    const { handleSubmit, control, formState: { errors } } = useForm();

    const signUpLoading = signUpMutation.isLoading

    const onSubmit = async (data) => {
        try {
            await signUpMutation.mutateAsync(data);

            console.log('Sign-up successful!');
            navigate('/sign-in');
        } catch (error) {
            setErrorMsg(error.message)
            console.log('Error signing up:', error.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, backgroundColor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {errorMsg.length>1 &&
                    <Typography color={'error.main'} component="h1" variant="h5">
                        {errorMsg}
                    </Typography>
                }
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="firstName"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'First Name is required' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        autoComplete="given-name"
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName && errors.firstName.message}
                                    />
                                )}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="lastName"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Last Name is required' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        autoComplete="family-name"
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName && errors.lastName.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        autoComplete="email"
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        error={!!errors.email}
                                        helperText={errors.email && errors.email.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Password is required' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        autoComplete="new-password"
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                        error={!!errors.password}
                                        helperText={errors.password && errors.password.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={signUpLoading ? <CircularProgress sx={{color: 'white'}} size={'20px'}/> : null}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/sign-in" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}
