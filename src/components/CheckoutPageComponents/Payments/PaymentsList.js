import React from 'react';
import Grid from "@mui/material/Grid";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentCard from "../PaymentCard/PaymentCrad";
import {paymentsMethods} from "../../../utils/consts";



const PaymentsList = (props) => {
    const { onSelect, selectedCard } = props;

    return (
        <Accordion elevation={0}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ borderBottom: '1px solid grey' }}
            >
                <Typography variant={'h3'} component={'h2'} color={'TypeLowEmphasis.main'}>Payments:</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ margin: '1rem' }}>
                <Grid container spacing={2}>
                    {paymentsMethods.map((payment) => (
                        <React.Fragment  key={payment.id}>
                            <Grid item xs={12} sm={6} md={3}>
                                <PaymentCard
                                    paymentMethod={payment}
                                    onSelect={onSelect}
                                    isSelected={payment.id === selectedCard}
                                />
                            </Grid>
                        </React.Fragment>

                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default PaymentsList;