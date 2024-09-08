import {Box, Button, Typography} from "@mui/material";
import {ReactComponent as PlusIcon} from "../../assets/icons/small-plus.svg";
import {ReactComponent as MinusIcon} from "../../assets/icons/small-minus.svg";
import {buttonStyle, containerStyle, IconButtonStyle} from "./style";

const QuantityCounter = (props) => {

    const { quantity, setQuantity, productQuantity } =props
    const increment = () => {
        if (quantity === productQuantity) {
            return
        }
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <Box sx={containerStyle} aria-label="Product Quantity Counter">
            <Button sx={buttonStyle} onClick={decrement}><MinusIcon sx={IconButtonStyle} /></Button>
            <Typography variant={'h5'} component={'h2'} >{quantity}</Typography>
            <Button sx={buttonStyle} onClick={increment}><PlusIcon sx={IconButtonStyle}/></Button>
        </Box>
    );
}

export default QuantityCounter;




