import React from 'react';
import BrandItem from './BrandItem/BrandItem';
import { Paper, Typography } from "@mui/material";
import { forwardRef } from 'react';
import { useProductsByBrand } from "../../../hooks/useAppAPIs";  // Import the new hook

const ShopByBrands = (props) => {
    const { innerRef } = props;

    // Use a default or example brandId for fetching
    const brandId = 1;  // Replace with actual logic to get brandId if necessary
    const { data: products, error } = useProductsByBrand(brandId);

    if (error) {
        return <Typography>Error loading products</Typography>;
    }

    return (
        <section
            aria-label="Shop by Brands Section"
            style={{ display: 'flex', flexDirection: 'column', width: '100%', alignSelf: 'center', marginTop: '2rem' }}
            ref={innerRef}
        >
            <Typography
                component={'h2'}
                variant={'h2'}
                id="brands-heading"
                sx={{ marginLeft: '1rem', marginBottom: '20px' }}
            >
                Shop by Brands
            </Typography>

            <Paper elevation={0} sx={{ marginTop: '1rem', display: 'flex', alignSelf: 'center', width: '100%', marginBottom: '3rem', cursor: 'pointer' }}>
                <div aria-labelledby="brands-heading" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', gap: "40px" }}>
                    {products?.slice(0, 6).map(product => (  // Limit to the first 6 brands
                        <BrandItem key={product.id} brand={product} />
                    ))}
                </div>
            </Paper>
        </section>
    );
}

export default forwardRef(ShopByBrands);
