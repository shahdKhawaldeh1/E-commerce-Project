import {Typography} from "@mui/material";


const AddressDetails = (props) => {

    const {address} = props
    return (
        <div style={{display: 'flex' , flexDirection:'column', gap:'10px'}}>
            <Typography component={'span'} variant={'body1'}>{`${address.firstName} ${address.lastName}`}</Typography>
            <Typography component={'span'} variant={'body1'}>{address.mobileNumber}</Typography>
            <Typography component={'span'} variant={'body1'}>{address.street}</Typography>
            <Typography component={'span'} variant={'body1'}>{address.city}</Typography>
            <Typography component={'span'} variant={'body1'}>{address.state}</Typography>
        </div>
    )
}

export default AddressDetails;