import React from 'react';
import ProductImageGallery from '../components/ProductPageComponents/ProductImageGallery/ProductImageGallery';
import { Box, Grid, Paper, Typography } from "@mui/material";
import ProductPanel from "../components/ProductPageComponents/ProductPanel/ProductPanel";
import ProductTaps from "../components/ProductPageComponents/ProductTaps/ProductTaps";
import { useProduct } from "../hooks/useAppAPIs";
import { useParams } from "react-router-dom";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import LoadingProgress from "../components/Loading/LoadingProgress";

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, isLoading, isError, error } = useProduct(id);

    console.log('Fetched Product Data:', product); // Debugging: Check if data is being fetched

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                {error?.response?.data?.error ? (
                    <Typography sx={{ color: 'primary.main' }} variant={'h2'} component={'h2'}>
                        {error.response.data.error}
                    </Typography>
                ) : (
                    <Typography sx={{ color: 'primary.main' }} variant={'h2'} component={'h2'}>
                        Something went wrong. Please try again.
                    </Typography>
                )}
            </Box>
        );
    }

    if (!product) {
        return (
            <Typography variant="h4" sx={{ textAlign: 'center', marginTop: '20px' }}>
                No Product Found
            </Typography>
        );
    }

    const links = [
        {
            name: 'Home',
            path: `/`
        },
        {
            name: product?.Categories?.[0]?.categoryTitle || 'Category', 
            path: `/products?categoryId=${product?.Categories?.[0]?.categoryId || ''}`
        },
    ];

    return (
        <div style={{ margin: '1rem' }}>
            <div style={{ padding: '1rem' }}>
                <CustomBreadcrumbs links={links} label={product?.title || 'Product Name'} />
            </div>
            {product && (
                <Paper elevation={0}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6} lg={6}>
                            <ProductImageGallery productImage={product.imageUrl} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <ProductPanel product={product} />
                        </Grid>
                        <Grid item xs={12}>
                            <ProductTaps description={product.description || 'No description available'} reviews={product.totalRatings || 0} />
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </div>
    );
};

export default ProductPage;
