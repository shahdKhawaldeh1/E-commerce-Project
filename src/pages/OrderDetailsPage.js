import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Grid, Typography} from "@mui/material";
import ItemsOrdered from "../components/OrderDetailsPageComponents/ItemsOrdered";
import OrderInvoice from "../components/OrderDetailsPageComponents/OrderInvoice";

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const OrderDetailsPage = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ margin:"1rem" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#F1F1F1',borderRadius: '12px' }}>
                <Tabs value={value} sx={
                    {
                        '& .MuiTabs-flexContainer': {
                            flexWrap: 'wrap',
                        },
                    }
                } TabIndicatorProps={{
                    style: {
                        display: 'none'
                    }
                }
                } onChange={handleChange} aria-label="basic tabs example">
                    <Tab  label="Items Ordered" {...a11yProps(0)} />
                    <Tab   label="Invoices" {...a11yProps(1)} />
                    <Tab  label="Order Shipment" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <ItemsOrdered/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <OrderInvoice/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Grid container spacing={1}>
                    <Typography component={'span'} variant={'body1'}>Shipment Information not available yet</Typography>
                </Grid>
            </CustomTabPanel>
        </Box>
    );
}


export default OrderDetailsPage;