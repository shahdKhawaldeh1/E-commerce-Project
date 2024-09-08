import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid} from "@mui/material";
import OrdersList from "../components/MyOrdersPageComponents/OrdersList/OrdersList";
import {useOrders} from "../hooks/useAppAPIs";

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

const MyOrdersPage = () => {


    const [value, setValue] = React.useState(0);

    const {data: completedOrders, isLoading: completedOrdersIsLoading, isError: completedOrdersIsError} = useOrders('completed');
    const {data: processingOrders, isLoading: processingOrdersIsLoading, isError: processingOrdersIsError} = useOrders('pending');
    const {data: cancelledOrders, isLoading: cancelledOrdersIsLoading, isError: cancelledOrdersIsError} = useOrders('cancelled');


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
                    <Tab  label="Completed" {...a11yProps(0)} />
                    <Tab   label="Processing" {...a11yProps(1)} />
                    <Tab  label="Cancelled" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <OrdersList orders={completedOrders} isLoading={completedOrdersIsLoading} isError={completedOrdersIsError}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <OrdersList orders={processingOrders} isLoading={processingOrdersIsLoading} isError={processingOrdersIsError}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Grid container spacing={1}>
                    <OrdersList orders={cancelledOrders} isLoading={cancelledOrdersIsLoading} isError={cancelledOrdersIsError}/>
                </Grid>
            </CustomTabPanel>
        </Box>
    );
}

export default MyOrdersPage;
