import React, {useEffect, useState} from 'react'
import {Card, Box, Typography, CardMedia, CardContent, IconButton} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {ReactComponent as FilledFavoriteIcon} from "../../assets/icons/Fill-favo-icon.svg";
import defaultImage from '../../assets/images/alt-image.png';
const ProductCard = (props) => {

    const { image, title, description, width, variant, addToFavourite=true, onClick, fill=false, imageSx, price} = props

    const [is1to1Ratio, setIs1to1Ratio] = useState(false);
    const [imageError, setImageError] = useState(false);

    let _width = width

    useEffect(() => {
        const img = new Image();
        img.src = image;

        img.onload = () => {
            const aspectRatio = img.width / img.height;
            setIs1to1Ratio(aspectRatio === 1);
        };

        img.onerror = () => {

            setImageError(true);
        };
    }, [image]);

    const renderImageSource = () => {
        if (image && !imageError) {
            return is1to1Ratio ? image : defaultImage;
        }
        return defaultImage;
    };


    return (
    <Card sx={{ width: _width, boxShadow: "none", margin: 0 }} aria-label={`Product Card for ${title}`}>
        {image &&
            <CardMedia
                component="img"
                sx={{objectFit:'cover', width: '100%',height:'auto', borderRadius: '8px', ...imageSx }}
                src={renderImageSource()}
                aria-label={`View details for ${title}`}
                role="img"
            />
        }
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {
                title &&
                <Typography gutterBottom variant={variant.title} component="h2" role="heading" aria-level="2">
                    {title}
                </Typography>
            }
            {addToFavourite &&
                <IconButton aria-label={`Toggle favorite for ${title}`}>
                    {fill ? <FilledFavoriteIcon onClick={onClick}/> : <FavoriteBorderIcon fontSize={'small'} onClick={onClick}/>}
                </IconButton>
            }

        </Box>
          {description &&
              <Typography noWrap variant={variant.body} color="text.secondary" component="p" role="paragraph">
                  {description}
              </Typography>
          }
          {price &&
          <Typography noWrap variant={variant.body} color="text.secondary" component="p" role="paragraph">
          {price}
      </Typography>
          }

      </CardContent>
    </Card>
  )
}
export default ProductCard