import Card from "@mui/material/Card";
import {Box, CardMedia, Typography, useMediaQuery} from "@mui/material";
import Price from "../../../Price/Price";
import React from "react";
import {useNavigate} from "react-router-dom";


const ProductCartCard = (props) => {

    const {product} = props

    const navigation = useNavigate();

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
    return (
        <Card  elevation={0} sx={{ display: 'flex', gap: '1rem', marginTop: '1rem',flexDirection: 'column', justifyContent: 'center' }}>
       <Box sx={{display: 'flex', gap: '12px'}}>
           <CardMedia
               component="img"
               sx={{cursor: 'pointer', width: 120, height: 120, borderRadius: '8px' }}
               image={product.image}
               alt="product image"
               onClick={() => navigation(`/products/${product.id}`)}
           />
           <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-around' }}>
               <Typography component="h2" variant="body1">
                   {product.name}
               </Typography>
               <Typography noWrap sx={{color: 'TypeLowEmphasis.main'}} component="h2" variant="body1">
                   {product.highlight.split(' ').slice(0, 2).join(' ')}
               </Typography>
               <Typography sx={{color: 'TypeLowEmphasis.main'}} component="h2" variant="body1">
                   Qty- {product.quantity}
               </Typography>
           </Box>
       </Box>
            {isSmallScreen && <Price discountedPrice={product.discountedPrice} discountRate={product.discount/100} originalPrice={product.price}  variant={{price: 'h3', Off: 'h4'}}  />}

        </Card>
    )
}

export default ProductCartCard;