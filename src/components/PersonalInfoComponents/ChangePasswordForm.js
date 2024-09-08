import {CircularProgress, Grid, InputAdornment, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import AlertStack from "../AlertStack/AlertStack";
import {UseChangePassword} from "../../hooks/useAppAPIs";


const ChangePasswordForm = () => {



    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('')

    const { register, handleSubmit,  reset,formState: { errors } } = useForm();

    const changePasswordMutation = UseChangePassword()
    const isLoading = changePasswordMutation.isLoading;
    const onSubmitHandler = async (formData) => {
        const userId = +localStorage.getItem('userId');

        if (formData.confirmPassword !== formData.newPassword) {
            setMessage('New password and confirm password do not match');
            setErrorAlertVisible(true);
            return;
        }

        try {
            const response = await changePasswordMutation.mutateAsync({
                id: userId,
                oldPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            });

            setMessage(response.data.message);
            setSuccessAlertVisible(true);
            reset();
        } catch (error) {
            setMessage(error.response?.data.error || 'An error occurred');
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
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmitHandler)}>

                <Typography sx={{ marginBottom: '1rem'}} variant={"h3"} component={"h3"}>
                    Change Password
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="currentPassword">
                            Current Password
                        </InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="currentPassword"
                            type={showCurrentPassword ? 'text' : 'password'}
                            {...register("currentPassword", {
                                required: 'This field is required',
                            })}
                            error={!!errors.currentPassword}
                            helperText={errors.currentPassword && errors.currentPassword.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                            edge="end"
                                        >
                                            {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="newPassword">
                            New Password
                        </InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="newPassword"
                            type={showNewPassword ? 'text' : 'password'}
                            {...register("newPassword", {
                                required: 'This field is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                            })}
                            error={!!errors.newPassword}
                            helperText={errors.newPassword && errors.newPassword.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            edge="end"
                                        >
                                            {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="confirmPassword">
                            Confirm Password
                        </InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            {...register("confirmPassword", {
                                required: 'This field is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                            })}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword && errors.confirmPassword.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </Grid>

                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "175px" }}>
                    {isLoading? <CircularProgress size={'20px'} sx={{color: 'white'}}/>  : 'Change Password'}
                </Button>
            </form>
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

export default ChangePasswordForm;