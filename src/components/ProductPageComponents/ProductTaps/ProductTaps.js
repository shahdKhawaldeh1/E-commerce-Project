import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ReviewCard from "./ReviewCard/ReviewCard";
import { Grid, Typography} from "@mui/material";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

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

 const ProductTaps = (props) => {

    const {description} = props
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
                    <Tab  label="Product Description" {...a11yProps(0)} />
                    <Tab   label="Related Products" {...a11yProps(1)} />
                    <Tab  label="Ratings and Reviews" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Typography sx={{color:'TypeLowEmphasis.main'}} variant={'body1'} component={'p'}>{description}</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <RelatedProducts/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <Grid container spacing={1}>
                   <ReviewCard  />
               </Grid>
            </CustomTabPanel>
        </Box>
    );
}

export default ProductTaps;