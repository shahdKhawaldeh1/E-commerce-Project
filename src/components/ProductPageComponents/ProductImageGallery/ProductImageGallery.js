import React from 'react'
import './ProductImageGallery.css'
import ImageGallery from "react-image-gallery";
import {useMediaQuery} from "@mui/material";
import theme from "../../../themes/customTheme";

const ProductImageGallery = (props) => {

    const {productImage} = props

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const productImages = Array.from({ length: 4 }, () => ({
        original: productImage,
        thumbnail: productImage,

    }));

    return (
        <section className="gallery-container" aria-label="Product Image Gallery" style={{display: 'flex', justifyContent:'center'}}>
            <ImageGallery showThumbnails={!isSmallScreen}  showFullscreenButton={false} showPlayButton={false} autoPlay={false} items={productImages} />
        </section>
    );
}

export default ProductImageGallery
