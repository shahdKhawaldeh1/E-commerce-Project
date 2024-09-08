import LoadingProgress from "../components/Loading/LoadingProgress";
import * as React from "react";
import {useAddresses} from "../hooks/useAppAPIs";
import AddressDetails from "../components/OrderDetailsPageComponents/AddressDetails";
import {Box, Divider, Typography} from "@mui/material";


const AddressesPage = () => {

    const {data:addresses, isLoading} = useAddresses()

    if (isLoading) {
        return <LoadingProgress />;
    }
    return (
       <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
           {addresses?.addresses.map((address, index) => (
               <Box key={index} sx={{
                   border: '1px solid #000',
                   borderRadius: '10px',
                   borderColor: 'accent.dark',
                   p: 2,
               }}>
                   <Typography component={"h2"} variant={"body1"}>Address {index+1}</Typography>

                   <Divider sx={{marginTop: '6px', marginBottom: '6px'}}/>
                   <AddressDetails
                       key={address.id}
                       address={address}
                   />
               </Box>
           ))}
       </div>
    );
}

export default AddressesPage;