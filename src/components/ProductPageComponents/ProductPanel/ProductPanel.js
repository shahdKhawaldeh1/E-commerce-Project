import React, { useState} from 'react'
import {Box, Button, Divider, Paper, Rating, Typography, useMediaQuery} from "@mui/material";
import Price from "../../Price/Price";
import QuantityCounter from "../../QuantityCounter/QuantityCounter";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
    QuantityActionBoxStyle,
    QuantityActionButtonsStyle,
    QuantityContainerStyle,
    RatingBoxStyle
} from "./style";
import theme from "../../../themes/customTheme";
import StarIcon from "@mui/icons-material/Star";
import ProductCard from "../../ProductCard/ProductCard";
import {useAddToCart, useAddToWishlist, useUser} from "../../../hooks/useAppAPIs";
import AlertStack from "../../AlertStack/AlertStack";
import {ReactComponent as ShoppingCartIcon} from "../../../assets/icons/cart.svg";
import CircularProgress from "@mui/material/CircularProgress";

const ProductPanel = (props) => {

    const {product} = props
    const [quantity, setQuantity] = useState(1);
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('')

    const { userData} = useUser();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const addToCartMutation = useAddToCart(product.id, quantity);
    const isAddToCartLoading = addToCartMutation.isLoading;

    const handleAddToCart = async () => {
        if (!userData) {
            setMessage('Please Sign In First')
            setWarningAlertVisible(true);
            return;
        }

        try {

            const response = await addToCartMutation.mutateAsync();
            setMessage(response.message)

            setSuccessAlertVisible(true);
        } catch (error) {
            setMessage(error.message)
            setErrorAlertVisible(true);
        }
    };

    const addToWishlistMutation = useAddToWishlist(product.id);
    const isAddToWishlistMutation= addToWishlistMutation.isLoading;
    const handleAddToWishlist = async () => {
        if (!userData) {
            setMessage('Please Sign In First')
            setWarningAlertVisible(true);
            return;
        }

        try {

            const response = await addToWishlistMutation.mutateAsync();
            setMessage(response.message)
            setSuccessAlertVisible(true);
        } catch (error) {
            setMessage(error.message)
            setErrorAlertVisible(true);
        }
    }

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };

    return (
        <Paper component={'section'} elevation={0} sx={{  display: 'flex', flexDirection: 'column', marginTop: '-1rem'}} role="region" aria-label="Product Information">

            <ProductCard
                title={product.name}
                description={product.highlight}
                variant={{title: 'h2', body:'h3'}}
                addToFavourite={false}
            />


            <div style={{ display: 'flex', alignItems: 'center', marginTop: '-1rem' }}>
                <Rating
                    sx={RatingBoxStyle}
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={product.rating}
                    readOnly
                    emptyIcon={<StarIcon sx={{ color: 'lightText.main' }} fontSize="inherit" />}
                    aria-label={`Rating: ${product.rating}`}
                />

                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'lightText.main',
                        marginLeft: '10px',
                    }}
                    variant={'h6'}
                    component={'span'}
                >
                    {product.reviewCount ? `(${product.reviewCount}) Ratings` : 'No rating'}
                </Typography>
            </div>

            <Box sx={{marginLeft: '1rem'}} role="region" aria-label="Product Price">
                <Price variant={{price: 'h1', Off: 'h3'}} discountRate={product.discount} originalPrice={product.price}  />
            </Box>

            <Divider sx={{marginTop: '1rem', marginBottom: '1rem'}}/>

            <Paper elevation={0} sx={QuantityContainerStyle}>
                <Typography variant={'h3'} component={'h2'}>Quantity:</Typography>
                <QuantityCounter
                    quantity={quantity}
                    setQuantity={setQuantity}
                    productQuantity={product.quantity}
                />
            </Paper>
            <Box sx={QuantityActionBoxStyle}>
                <Button
                    variant="contained"
                    aria-label="Add to Cart"
                        sx={QuantityActionButtonsStyle}
                        startIcon={isAddToCartLoading ? <CircularProgress size={'20px'} sx={{color: 'white'}}/> :<ShoppingCartIcon/>}
                        onClick={handleAddToCart}
                >{isSmallScreen ? '': 'Add to cart'}
                </Button>
                <Button
                    variant="outlined"
                    aria-label="Add to Wishlist"
                    sx={{ ...QuantityActionButtonsStyle, width: '240px' }}
                    startIcon={isAddToWishlistMutation ? <CircularProgress size={'20px'} sx={{color: 'primary.main'}}/> :<FavoriteBorderIcon/>}
                    onClick={handleAddToWishlist}
                >
                    {isSmallScreen ? '' : 'Add to wishlist'}
                </Button>
            </Box>
            <AlertStack
                warningVisible={warningAlertVisible}
                successVisible={successAlertVisible}
                errorVisible={errorAlertVisible}
                onCloseAlert={handleCloseAlert}
                message={message}
            />
        </Paper>
    )
}

export default ProductPanel
