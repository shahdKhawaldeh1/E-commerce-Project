import React from 'react';
import ProductsList from '../components/ProductsList/ProductsList';
import { StyledTitle } from '../themes/StyledPageTitle';
import { Box, Container, CircularProgress, Typography } from '@mui/material';
import { useWishlist } from '../hooks/useAppAPIs';
import CustomBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import EmptyWishList from '../components/EmptyWishList/EmptyWishList';

const Wishlist = () => {
    const { data: wishlistProducts, isLoading, error, isError } = useWishlist();

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="xl">
            <StyledTitle variant="h2" component="h1">
                My Wishlist
            </StyledTitle>

            <CustomBreadcrumbs links={[{ name: 'Home', path: '/' }]} label={'My Wishlist'} />

            {error || isError ? (
                <>
                    <Typography component="h2" variant="h3">
                        Something went wrong with the wishlist
                    </Typography>
                    <EmptyWishList />
                </>
            ) : wishlistProducts ? (
                <ProductsList fill={true} products={wishlistProducts.wishlist} />
            ) : (
                <EmptyWishList />
            )}
        </Container>
    );
};

export default Wishlist;
