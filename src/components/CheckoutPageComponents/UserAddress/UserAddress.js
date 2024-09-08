import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Radio from "@mui/material/Radio";

const UserAddress = (props) => {
    const { address, onSelect, isSelected } = props;

    const handleCardClick = () => {
        onSelect(address.id);
    };

    const commonCardStyles = {
        border: 1,
        borderRadius: 8,
        borderColor: 'primary.main',
        margin: 1,

    };

    return (
        <CardActionArea sx={{ width: '300px', }} onClick={handleCardClick}>
            <Card sx={{ ...commonCardStyles, position: 'relative' }}>
                <Radio
                    checked={isSelected}
                    onChange={handleCardClick}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                />
                <CardContent>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <span style={{ fontWeight: 'bold' }}>First Name:</span> <br/> {address.firstName}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <span style={{ fontWeight: 'bold' }}>Last Name:</span> <br/> {address.lastName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    <span style={{ fontWeight: 'bold' }}>Mobile:</span> {address.mobileNumber}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <span style={{ fontWeight: 'bold' }}>City:</span> {address.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <span style={{ fontWeight: 'bold' }}>State:</span> {address.state}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <span style={{ fontWeight: 'bold' }}>Pin:</span> {address.pin}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </CardActionArea>
    );
};

export default UserAddress;
