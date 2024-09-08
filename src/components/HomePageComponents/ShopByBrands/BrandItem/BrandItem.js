import React from 'react';
import { CardMedia } from "@mui/material";
import { BrandCard } from "./style";
import { useNavigate } from 'react-router-dom';

const BrandItem = ({ brand }) => {
    const navigate = useNavigate();

    if (!brand) {
        return null;
    }

    return (
        <div>
            <BrandCard>
                <CardMedia
                onClick={() => navigate(`/products?brandId=${brand.id}&brandName=${brand.title}`)}

                    // Use the brand.id to match the API structure
                    component="img"
                    image={brand.imageUrl}  // Ensure the image URL matches the API response
                    style={{ width: '80%', height: 'auto' }}
                />
            </BrandCard>
        </div>
    );
};

export default BrandItem;
