import React, { useState} from "react";
import Box from "@mui/material/Box";
import {Button, CircularProgress, Divider, Typography, useMediaQuery} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import PaymentsList from "../components/CheckoutPageComponents/Payments/PaymentsList";
import {useNavigate} from "react-router-dom";
import AddressesList from "../components/CheckoutPageComponents/AddressesList/AddressesList";
import {useCart, usePutOrder, useUpdateOrderInfo, useUpdateOrderPayment} from "../hooks/useAppAPIs";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import AlertStack from "../components/AlertStack/AlertStack";
import {Container} from "@mui/system";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import {paymentsMethods} from "../utils/consts";



const CheckoutPage = () => {
    const [cardId, setCardId] = useState(null);
    const [paymentSelectedCard, setPaymentSelectedCard] = useState(null);
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('')

    const {data:cartProducts, isLoading, isError, error} = useCart()
    const PutOrderMutation = usePutOrder();
    const useUpdateOrderInfoMutation = useUpdateOrderInfo()
    const useUpdateOrderPaymentMutation = useUpdateOrderPayment()

    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 425px)');

    const handleSelectingAddressCard = (cardId) => {
        setCardId(cardId);
    };
    const handleSelectingPaymentCard = (cardId) => {
        setPaymentSelectedCard(cardId);
    };

    const currentPaymentMethod = paymentsMethods.find((item) => item.id === paymentSelectedCard);


    const isPlacingOrderLoading = PutOrderMutation.isLoading
    const handlePlacingOrder = async () => {

        if (!cardId) {
            setMessage("Please Select an Address");
            setWarningAlertVisible(true);
            return
        }

        else if (!currentPaymentMethod) {
            setMessage("Please Select an Payment Method");
            setWarningAlertVisible(true);
            return
        }
        try {
            const response =  await PutOrderMutation.mutateAsync();
             await useUpdateOrderInfoMutation.mutateAsync({ orderId: cartProducts.orderId, addressId: cardId });
             await useUpdateOrderPaymentMutation.mutateAsync({ orderId: cartProducts.orderId, paymentMethod: currentPaymentMethod.title })

            setMessage(response.message);
            setSuccessAlertVisible(true);

            setTimeout(() => {
                navigate('/');
            }, 10000);
        } catch (error) {
            setMessage(error.message);
            setErrorAlertVisible(true);

        }
    };

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };

    const links = [
        {
            name: 'Home',
            path: `/`
        },
    ]

    if (isLoading) {
        return (
            <div style={{  }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }

    if (isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                {error.response && error.response.data && (
                    <Typography sx={{color:'primary.main'}} variant={'h2'} component={'h2'}>{error.response.data.error}</Typography>
                )}
            </Box>
        )
    }

    if (cartProducts.length === 0) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{marginLeft: '2rem', display:'flex', alignSelf: 'flex-start'}}>
                    <CustomBreadcrumbs links={links} label={'Checkout'}/>
                </div>
                <EmptyCart />
            </div>
        )
    }

    return (
        <>
            {
                cartProducts &&
                <div style={{marginLeft: '1rem'}}>
                    <StyledTitle variant="h2" component={'h1'} >
                        Checkout
                    </StyledTitle>
                    <CustomBreadcrumbs links={links} label={'Checkout'}/>
                    <Grid container spacing={{ xs: 2, md: 8, lg: 10}}>
                        <Grid item xs={12} sm={6} md={8}>
                            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} elevation={0}>
                               <Box sx={{width: isSmallScreen ?'295px' : '100%'}}>
                                   <AddressesList
                                       onSelect={handleSelectingAddressCard}
                                       selectedCard={cardId}
                                   />
                                   <PaymentsList

                                       selectedCard={paymentSelectedCard}
                                       onSelect={handleSelectingPaymentCard}
                                   />
                               </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                                    <Button sx={{ textDecoration: 'underline' }} onClick={()=> navigate('/my-cart')}>Back to Cart</Button>
                                    <Button
                                        variant="contained" color="primary"
                                        startIcon={isPlacingOrderLoading ? <CircularProgress size={'20px'} sx={{color: 'white'}}/> :""}
                                        onClick={handlePlacingOrder}
                                    >
                                        Place Order
                                    </Button>
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box >
                                        <Typography variant={'h3'} component={'h2'} sx={{ marginBottom: '10px' }}>
                                            Order Summary
                                        </Typography>
                                        <Divider />
                                        <ProductCartList
                                            cartProducts={cartProducts.cartItems}
                                            showTable={false}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <OrderCheckoutSummary
                                        headTitle={"Order Details"}
                                        width={'260px'}
                                        cartProducts={cartProducts}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <AlertStack
                        warningVisible={warningAlertVisible}
                        successVisible={successAlertVisible}
                        errorVisible={errorAlertVisible}
                        onCloseAlert={handleCloseAlert}
                        message={message}
                    />
                </div>
            }
        </>
    );
};

export default CheckoutPage;
