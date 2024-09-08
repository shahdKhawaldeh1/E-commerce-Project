import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { Typography, Box } from '@mui/material';
import { Button } from '@mui/material';
import { useNewArrivals } from '../../../hooks/useAppAPIs';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoadingProgress from '../../Loading/LoadingProgress';
import { sectionBox } from "./style";

const NewArrival = () => {
    const navigate = useNavigate();
    const { data: newArrivals, isLoading, isError } = useNewArrivals();

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <Box
            component="section"
            role="region"
            aria-label="New Arrivals Section"
            sx={{
                margin: ['20px', '18px', '16px', '14px', '10px'],
                marginRight: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: ['20px', '18px', '16px', '14px', '10px'],
                }}
            >
                <Typography sx={{ color: 'dark.main' }} variant="h2" component={'h3'}>
                    New Arrivals
                </Typography>
                <Button
                    style={{ textTransform: 'none', alignSelf: 'flex-end', fontSize: '16px' }}
                    aria-label="View all new arrivals"
                    onClick={() => navigate(`/products?newArrivals=New Arrivals`)}
                    endIcon={<ArrowForwardIosIcon />}
                >
                    View all
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignSelf: 'flex-start',
                    marginTop: '1rem',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                {newArrivals?.slice(0, 4).map((product, index) => (
                    <Box
                        key={index}
                        onClick={() => navigate(`/products/${product.id}`)}
                        sx={sectionBox}
                    >
                        <ProductCard
                            image={product.imageUrl}
                            item={product}
                            title={product.title}
                            description={product.label}
                            price={product.price + "$"}
                            variant={{ title: 'h5', body: 'body2' }}
                            width={'100%'}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default NewArrival;
