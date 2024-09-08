import {Box, Typography} from "@mui/material";
import {PriceBoxStyle} from "./style";

const Price = (props) => {
    const {originalPrice, discountRate, variant, discountedPrice} = props

    return (
        <Box sx={PriceBoxStyle}>
            {discountRate === 0 &&
            <Typography
                variant={variant.price}
                component={'span'}
                sx={{
                    fontWeight: 700
                }}
            >${originalPrice.toFixed(2)}</Typography>
            }
            {discountRate > 0 &&

                <>
                    <Typography
                        variant={variant.price}

                        component={'span'}
                    >${discountedPrice? discountedPrice.toFixed(2) : (originalPrice*(discountRate/100)).toFixed(2)}
                    </Typography>

                    <Typography
                        variant={variant.price}
                        sx={{
                            fontWeight: 600,
                            textDecoration: "line-through",
                            color: 'lightText.main',
                        }}
                        component={'span'}
                    >${originalPrice.toFixed(2)}
                    </Typography>

                    <Typography
                        variant={variant.Off}
                        sx={{color: 'red'}}
                        component={'span'}
                    >
                        {discountRate}%OFF
                    </Typography>
                </>
            }
        </Box>
    )
}

export default Price;