import {CircularProgress, Grid, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {UseUpdateUser} from "../../hooks/useAppAPIs";
import AlertStack from "../AlertStack/AlertStack";


const UpdateUserInfoForm = (props) => {

    const { userData } = props;

    const initialValues = {
        firstName: userData.firstName,
        lastName : userData.lastName,
        email : userData.email,
        mobileNumber: userData.mobileNumber,
        birthDate : userData.birthDate
    }

    const [isFormActive, setIsFormActive] = useState(false);
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues
    });
    const updateUserMutation = UseUpdateUser();
    const isLoading = updateUserMutation.isLoading
    const onSubmitHandler = async (formData) => {


        try {
            const response = await updateUserMutation.mutateAsync(formData);
            setMessage(response.data.message)
            setSuccessAlertVisible(true);
            setIsFormActive((prevState) => !prevState);
        } catch (error) {
            setMessage(error.response.data.error);
            setErrorAlertVisible(true);

        }
    };

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };

    return (
        <>
            {isFormActive ? (
                <form style={{display: 'flex'}} onSubmit={handleSubmit(onSubmitHandler)}>
                    <Grid container sx={{ width: ["100%", "70%"] }} spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="firstName">
                                First Name
                            </InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name={"firstName"}
                                placeholder={"Enter First Name"}
                                {...register("firstName", {
                                    required: 'This field is required',
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
                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="lastName">
                                Last Name
                            </InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name={"lastName"}
                                placeholder={"Enter Last Name"}

                                {...register("lastName", {
                                    required: 'This field is required',
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
                        <Grid item xs={12} sm={10}>
                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="street">
                                Email
                            </InputLabel>
                            <TextField
                                placeholder={"Enter Email"}
                                variant="outlined"
                                margin="normal"
                                fullWidth

                                name="email"
                                {...register("email", {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Enter a valid email address',
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Minimum length is 3 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum length is 20 characters",
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email && errors.email.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="mobileNumber">
                                Mobile Number
                            </InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name={"mobileNumber"}
                                placeholder={"Enter Mobile Number"}
                                {...register("mobileNumber", {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^\d{9}$/,
                                        message: 'Mobile number must be 9 digits',
                                    },
                                })}
                                error={!!errors.mobileNumber}
                                helperText={errors.mobileNumber && errors.mobileNumber.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="state">
                                Birthday
                            </InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name="birthDate"

                                placeholder={"Enter Birthday"}
                                {...register("birthDate", {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^\d{4}-\d{2}-\d{2}$/,
                                        message: 'Please enter a valid date (YYYY-MM-DD)',
                                    },
                                })}
                                error={!!errors.birthDate}
                                helperText={errors.birthDate && errors.birthDate.message}
                            />
                        </Grid>


                    </Grid>

                    <Button type="submit" variant="contained" color="primary"  sx={{ mt: 2, width: "136px", alignSelf: 'flex-end' }}>
                        {isLoading? <CircularProgress size={'20px'} sx={{color: 'white'}}/>  : 'Save Changes'}
                    </Button>
                </form>
            ) : (
                <Box sx={{display: 'flex', width: ['100%','100%','100%',"90%"] }}>
                    <Grid  container spacing={1}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant="body1" sx={{marginBottom: '1rem'}}>
                                First Name:
                            </Typography>
                            <Typography variant="body1" sx={{ backgroundColor: '#cfcaca', maxWidth:'215px', padding: '16px'}}>
                                {userData.firstName}
                            </Typography>
                        </Grid>
                        <Grid  item xs={12} sm={12} md={6}>
                            <Typography variant="body1" sx={{marginBottom: '1rem'}}>
                                Last Name:
                            </Typography>
                            <Typography variant="body1" sx={{ backgroundColor: '#cfcaca', maxWidth:'215px', padding: '16px'}}>
                                {userData.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{marginBottom: '1rem', marginTop: '1rem'}}>
                                Email:
                            </Typography>
                            <Typography variant="body1" sx={{ backgroundColor: '#cfcaca', maxWidth:'520px', padding: '16px'}}>
                                {userData.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{marginBottom: '1rem', marginTop: '1rem'}}>
                                Mobile Number:
                            </Typography>
                            <Typography variant="body1" sx={{ backgroundColor: '#cfcaca', maxWidth:'215px', padding: '16px'}}>
                                {userData.mobileNumber}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant="body1" sx={{marginBottom: '1rem', marginTop: '1rem'}}>
                                Date of Birth:
                            </Typography>
                            <Typography variant="body1" sx={{ backgroundColor: '#cfcaca', maxWidth:'215px', padding: '16px'}}>
                                {userData.birthDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, width: "136px", alignSelf: 'flex-end' }}
                        onClick={() => setIsFormActive((prevState) => !prevState)}
                    >
                        Change
                    </Button>
                </Box>
            )}
            <AlertStack
                warningVisible={warningAlertVisible}
                successVisible={successAlertVisible}
                errorVisible={errorAlertVisible}
                onCloseAlert={handleCloseAlert}
                message={message}
            />
        </>
    )
}

export default UpdateUserInfoForm;