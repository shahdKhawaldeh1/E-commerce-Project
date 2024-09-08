import {Box, CircularProgress} from "@mui/material";
import React from "react";


const LoadingProgress = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
            <CircularProgress />
        </Box>
    )
}

export default LoadingProgress