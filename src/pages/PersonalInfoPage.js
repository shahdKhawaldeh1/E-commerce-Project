import Typography from "@mui/material/Typography";
import {Avatar, Divider,  Paper} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import { useUser } from "../hooks/useAppAPIs";
import LoadingProgress from "../components/Loading/LoadingProgress";
import {ReactComponent as DeleteIcon} from "../assets/icons/delete-small.svg";
import ChangePasswordForm from "../components/PersonalInfoComponents/ChangePasswordForm";
import UpdateUserInfoForm from "../components/PersonalInfoComponents/UpdateUserInfoForm";

const PersonalInfoPage = () => {



    const { userData, isLoading } = useUser();


    if (isLoading) {
        return <LoadingProgress />;
    }
    return (
        <>
            <Paper elevation={0} sx={{ width: "100%" }}>
                <Typography variant={"h3"} component={"h3"}>
                    Personal Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-end', marginBottom: '2rem', marginTop: '1rem' }}>
                    <Avatar sx={{ height: ['30px', '50px', '80px'], width: ['30px', '50px', '80px'] }} src="/broken-image.jpg" />
                    <Button variant={'contained'} sx={{ width: '136px', height: '40px' }}>Upload</Button>
                    <Button variant={'outlined'} color="error" sx={{ width: '136px', height: '40px' }} startIcon={<DeleteIcon/>}>Delete</Button>
                </Box>
                <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "auto",

                        paddingBottom: "1rem",
                    }}
                >
                    <UpdateUserInfoForm userData={userData}/>

                    <Divider sx={{marginTop: '2rem', marginBottom: '2rem'}}/>

                    <ChangePasswordForm />
                </Box>
            </Paper>
        </>
    );
};

export default PersonalInfoPage;
