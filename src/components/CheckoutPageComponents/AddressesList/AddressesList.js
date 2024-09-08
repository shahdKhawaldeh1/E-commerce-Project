import React, { useState} from 'react';
import Grid from "@mui/material/Grid";
import UserAddress from "../UserAddress/UserAddress";
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddAddress from "../AddAddress/AddAddress";
import {useAddAddress, useAddresses} from "../../../hooks/useAppAPIs";
import CircularProgress from "@mui/material/CircularProgress";
import AlertStack from "../../AlertStack/AlertStack";


const AddressesList = (props) => {

    const { onSelect, selectedCard} = props

    const [show, setShow] = useState(false)
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('')


    const {data:addresses} = useAddresses()

    const addToAddressMutation = useAddAddress();
    const isLoading = addToAddressMutation.isLoading
    const handleSubmit = async (addressFormData) => {
        try {

            const response = await addToAddressMutation.mutateAsync(addressFormData);
            setMessage("Address Added Successfully !")
            setSuccessAlertVisible(true);
            setShow(false);
        } catch (error) {
            setMessage(error.message)
            setErrorAlertVisible(true);
            console.error('Validation Error:', error.response.data);
        }
    };

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };

    return (
        <>
            <Accordion elevation={0}  >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{borderBottom: '1px solid grey'}}
                >
                    <Typography variant={'h3'} component={'h2'} color={'TypeLowEmphasis.main'}>Addresses list:</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{margin: '1rem'}}>
                    {!addresses && <Typography sx={{marginBottom: '1rem'}}>No addresses yet, please add one at least!</Typography>}
                    <Grid container spacing={2}>
                        {addresses && addresses.addresses.map((address) => (
                            <UserAddress
                                key={address.id}
                                address={address}
                                onSelect={onSelect}
                                isSelected={address.id === selectedCard}
                            />
                        ))}
                    </Grid>
                    <Button sx={{marginTop: '1rem'}} variant="contained"
                            startIcon={isLoading? <CircularProgress size={'20px'} sx={{color: 'white'}}/> : <AddCircleIcon />}
                            onClick={()=> setShow(!show)}>Add New Address</Button>
                    {show &&
                        <AddAddress onSubmit={handleSubmit}/>
                    }

                </AccordionDetails>
            </Accordion>
            <AlertStack
                warningVisible={warningAlertVisible}
                successVisible={successAlertVisible}
                errorVisible={errorAlertVisible}
                onCloseAlert={handleCloseAlert}
                message={message}
            />
        </>
    );
};

export default AddressesList;
