import OrderCheckoutSummary from "../MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import React, {useState} from "react";
import { useOrdersItems, useReorder} from "../../hooks/useAppAPIs";
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import {Button, Divider, LinearProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import ProductCartList from "../MyCartPageComponents/ProductCartList/ProductCartList";
import AlertStack from "../AlertStack/AlertStack";
import AddressDetails from "./AddressDetails";
import CircularProgress from "@mui/material/CircularProgress";


const ItemsOrdered = () => {

    const [message, setMessage] = useState('')
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);


    const {id} = useParams()
    const {data: order, isLoading, isError} = useOrdersItems(id)

    const reorderMutation = useReorder(id);
    const reorderIsLoading = reorderMutation.isLoading
    const handelReorder = async () => {
        try {

            const response = await reorderMutation.mutateAsync();
            setMessage(response.message)
            setSuccessAlertVisible(true);
        } catch (error) {
            setMessage(error.message)
            setErrorAlertVisible(true);
        }
    }

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };


    if (isLoading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    if (!order || isError || order.length ===0) {
        return (<Typography variant={'body1'} component={'span'}>No Orders up to now</Typography>)
    }

    return (

       <div style={{display: 'flex', flexDirection:'column'}}>
           <ProductCartList cartProducts={order.items} showButtons={false}/>

           <Typography variant={"h3"} component={"h3"} sx={{marginTop: '3rem', marginBottom: '1rem'}}>Order Information</Typography>
           <Divider/>
           <div style={{display: 'flex', justifyContent: 'space-between', marginTop:'1rem', flexWrap: "wrap"}}>
               <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}>
                   <Typography variant={"body1"} component={"h4"} sx={{color: 'TypeLowEmphasis.main', marginLeft: '1rem', marginBottom: '-1rem'}}>Order Details</Typography>
                   <OrderCheckoutSummary
                       headTitle={""}
                       cartProducts={order}
                       showButtons={false}
                   />
               </div>
               <div >
                   <Typography variant={"body1"} component={"h4"} sx={{color: 'TypeLowEmphasis.main', marginBottom: '1rem'}}>Payment Details</Typography>
                   <Typography variant={"body1"} component={"span"} >Using Card</Typography>
               </div>
               <div >
                   <Typography variant={"body1"} component={"h4"} sx={{color: 'TypeLowEmphasis.main', marginBottom: '1rem'}}>Address Details</Typography>
                  <AddressDetails address={order.userAddress}/>
               </div>

           </div>

           <div style={{alignSelf: 'flex-end'}}>

               <Button variant="contained" onClick={handelReorder}>{reorderIsLoading? <CircularProgress size={'20px'} sx={{color: 'white'}}/> :'Reorder'}</Button>
           </div>

           <AlertStack
               warningVisible={warningAlertVisible}
               successVisible={successAlertVisible}
               errorVisible={errorAlertVisible}
               onCloseAlert={handleCloseAlert}
               message={message}
           />
       </div>

    )
}

export default ItemsOrdered;