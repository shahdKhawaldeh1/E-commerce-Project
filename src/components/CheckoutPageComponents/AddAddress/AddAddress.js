import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Grid, InputLabel} from "@mui/material";
import {useForm} from "react-hook-form";

const AddAddress = (props) => {
    const {onSubmit} = props

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmitHandler = (data) => {
        onSubmit(data);
    };

    return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 3,
                }}
            >
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="firstName">First Name</InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                placeholder={"Enter First Name"}
                                fullWidth
                                {...register("firstName", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimum length is 3 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum length is 20 characters",
                                    },
                                })}
                                error={!!errors.firstName}
                                helperText={errors.firstName && errors.firstName.message}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="lastName">Last Name</InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                placeholder={"Enter Last Name"}
                                fullWidth
                                {...register("lastName", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimum length is 3 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum length is 20 characters",
                                    },
                                })}
                                error={!!errors.lastName}
                                helperText={errors.lastName && errors.lastName.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="mobileNumber">Mobile Number</InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                placeholder={"Enter Mobile Number"}
                                fullWidth
                                {...register("mobileNumber", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[0-9]{9}$/,
                                        message: "Mobile Number should be 9 digits",
                                    },
                                })}
                                error={!!errors.mobileNumber}
                                helperText={errors.mobileNumber && errors.mobileNumber.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="street">Street</InputLabel>
                            <TextField
                                placeholder={"Enter Street"}
                                variant="outlined"
                                margin="normal"
                                name="street"
                                fullWidth
                                {...register("street", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimum length is 3 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum length is 20 characters",
                                    },
                                })}
                                error={!!errors.street}
                                helperText={errors.street && errors.street.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="state">State</InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name="state"
                                fullWidth
                                placeholder={"Enter State"}
                                {...register("state", {
                                    required: "This field is required",
                                })}
                                error={!!errors.state}
                                helperText={errors.state && errors.state.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="city">City</InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name="city"
                                fullWidth
                                placeholder={"Enter City"}
                                {...register("city", {
                                    required: "This field is required",
                                })}
                                error={!!errors.city}
                                helperText={errors.city && errors.city.message}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="pin">PIN</InputLabel>
                            <TextField
                                placeholder={"Enter PIN"}
                                variant="outlined"
                                margin="normal"
                                name="pin"
                                fullWidth
                                {...register("pin", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[0-9]{4}$/,
                                        message: "PIN must be exactly 4 digits",
                                    },
                                })}
                                error={!!errors.pin}
                                helperText={errors.pin && errors.pin.message}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>

            </Box>
    );
};

export default AddAddress;