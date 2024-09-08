import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Typography, Paper, Box, Grid, Rating, useMediaQuery } from '@mui/material';
import Price from '../Price/Price';
import { useNavigate } from 'react-router-dom';

const ProductsList = (props) => {
  const { products, onClick, fill } = props;
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 768px)');

  return (
      <>
        {products && (
            <Paper
                sx={{
                  width: '100%',
                  boxShadow: 'none',
                  cursor: 'pointer',
                }}
                component={'section'}
                role="list"
                aria-label="Product List"
            >
              <Grid role="list" aria-label="Product Grid" container spacing={3} >
                {products.map((productItem, index) => (
                    <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: isSmallScreen ? 'center' : 'space-between'}} item xs={12} sm={6} md={4} lg={3} key={index} onClick={() => navigate(`/products/${productItem.id}`)} role="list-item" aria-posinset={index + 1} aria-setsize={products.length}>
                      <ProductCard
                          image={productItem.imageUrl} 
                          title={productItem.title} 
                          description={productItem.label}  
                          variant={{ title: 'body1', body: 'h6' }}
                          width={285}
                          onClick={onClick}
                          fill={fill}
                      />
                      {isSmallScreen ? (
                          <Typography sx={{ color: 'primary.main', marginLeft: '1rem' }} variant={'h6'} component={'p'}>
                            {productItem.rating ? `Rating: ${productItem.rating}` : 'No Ratings'}
                          </Typography>
                      ) : (
                          <Box sx={{ display: 'flex', marginBottom: '5px', marginLeft: '10px' }} role="content-info">
                            <Rating name="half-rating-read" value={productItem.rating} precision={0.5} readOnly />
                            <Typography sx={{ color: 'primary.main', marginLeft: '10px' }} variant={'h6'} component={'p'} role="status">
                              {productItem.rating ? `${productItem.totalRatings} Ratings` : 'No rating'}
                            </Typography>
                          </Box>
                      )}
                      <Box sx={{ marginLeft: '1rem' }} role="content-info" aria-label="Product Price">
                        <Price discountRate={productItem.discount} originalPrice={productItem.price} variant={{ price: 'body1', Off: 'h6' }} />
                      </Box>
                    </Grid>
                ))}
              </Grid>
            </Paper>
        )}
      </>
  );
};

export default ProductsList;
