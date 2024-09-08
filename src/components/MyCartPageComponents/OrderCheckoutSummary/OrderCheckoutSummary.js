import {Box, Button, Divider, Paper, Typography, useMediaQuery} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

const OrderCheckoutSummary = (props) => {

    const {cartProducts , headTitle, showButtons=false} = props
    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 425px)');
    const navigate = useNavigate()
    return (
        <Paper elevation={0} sx={{margin: '1rem', paddingY: '1rem', alignSelf: 'flex-end', maxWidth: '450px'}}>
            <Typography variant={'h3'} component={'h2'} sx={{ marginBottom: '10px'}}>
                {headTitle}
            </Typography>
            {headTitle.length>1 && <Divider />}

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop:'12px', marginBottom:'12px'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Sub Total</Typography>
                    <Typography>${cartProducts.totalOrderPriceAfterDiscount.toFixed(2)}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Discount</Typography>
                    <Typography>-${(cartProducts.totalOrderPriceBeforeDiscount-cartProducts.totalOrderPriceAfterDiscount).toFixed(2)}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Delivery Fee</Typography>
                    <Typography>$12</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{fontWeight: 600}} variant={'h4'} component={'h2'}>Grand Total</Typography>
                    <Typography>${(cartProducts.totalOrderPriceAfterDiscount+12).toFixed(2)}</Typography>
                </Box>
            </Box>
            {showButtons &&
                <Box sx={{display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: isSmallScreen ? 'center' :'flex-end', width: '91%', gap: '30px', marginTop: '3rem'}}>
                    <Button
                        sx={{width: '180px', alignSelf: 'center'}}
                        variant={'contained'}
                        onClick={()=>navigate('/checkout')}
                    >Checkout</Button>
                    <Button
                        sx={{ width: '180px', alignSelf: 'center', whiteSpace: 'nowrap' }}
                        variant={'outlined'}
                        onClick={()=> navigate('/')}
                    >Continue Shopping</Button>
                </Box>
            }
        </Paper>
    )
}

export default OrderCheckoutSummary;