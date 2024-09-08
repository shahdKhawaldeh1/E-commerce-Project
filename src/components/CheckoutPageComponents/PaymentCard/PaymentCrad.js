import React from 'react';
import { Card, CardMedia, Radio, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";

const PaymentCard = (props) => {
    const { paymentMethod, onSelect, isSelected } = props;

    const handleCardClick = () => {
        onSelect(paymentMethod.id);
    };


    return (
        <CardActionArea sx={{ width: '280px' }} onClick={handleCardClick}>
            <Card elevation={0} sx={{ width: '150px', height: '143px', display: 'flex', flexDirection: 'column', margin: '8px', position: 'relative', border:'1px solid #E3E3E3', borderRadius:'8px' }}>
                <Radio
                    checked={isSelected}
                    onChange={handleCardClick}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                />
                    <Box sx={{display: 'flex', flexDirection: 'column', marginTop: 'auto', alignSelf: 'center', alignItems: 'center'}}>
                        <CardMedia
                            component="img"
                            sx={{
                                height: '30px',
                                width: 'auto',
                            }}
                            image={paymentMethod.image}
                            alt="Payment Card"
                        />
                        <CardContent sx={{ display: 'flex', alignSelf: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {paymentMethod.title}
                            </Typography>
                        </CardContent>
                    </Box>
            </Card>
        </CardActionArea>
    );
};

export default PaymentCard;