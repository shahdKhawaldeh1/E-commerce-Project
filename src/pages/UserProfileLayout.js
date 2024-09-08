import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import {StyledTitle} from "../themes/StyledPageTitle";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import {useLogout} from "../hooks/useAppAPIs";
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {Grid, useMediaQuery} from "@mui/material";
import {useEffect, useState} from "react";



const tabLabels = [
    "Personal Information",
    "My Orders",
    "My Address Book",
    "Order",
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <section>{children}</section>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const paths = ["/user-profile/info", "/user-profile/orders", "/user-profile/addresses"];
const UserProfileLayout = () => {
    const [value, setValue] = React.useState(0);
    const [breadcrumbsLabel, setBreadcrumbsLabel] = useState(tabLabels[value])
    const [links, setLinks] = useState([{name: 'Home', path: `/`},{name: 'User Profile', path: `/user-profile/info`}]);

    const navigate = useNavigate();
    const userMutation = useLogout();
    const location = useLocation();
    const {id} = useParams()

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 900px)');

    const pathSegments = location.pathname.split('/');


    const handleChange = (event, newValue) => {
        setValue(newValue);

        navigate(paths[newValue]);

    };

    const handleLogout = async () => {
        try {
            await userMutation.mutateAsync();

            localStorage.removeItem('token');
            navigate('/');

        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        if (pathSegments.includes("orders") && id) {
            setLinks([...links, {name: 'Orders', path: `/user-profile/orders`}]);
            setBreadcrumbsLabel(`Order#${id}`);
        } else {
            setLinks([{name: 'Home', path: `/`},{name: 'User Profile', path: `/user-profile/info`}]);
            setBreadcrumbsLabel(tabLabels[value]);
        }
    }, [location.pathname, id]);

    return (
     <div style={{width:'90%', margin: '1rem'}}>
         <CustomBreadcrumbs links={links} label={breadcrumbsLabel}/>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
             <StyledTitle variant="h2" component={'h1'}>
                 {breadcrumbsLabel}
             </StyledTitle>
             <Button onClick={handleLogout} endIcon={<LogoutIcon />} variant={'outlined'}>
                 Logout
             </Button>
         </div>

         <Box
             sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:'auto', width: '100%'}}
         >
             <Grid container>
               <Grid item xs={12} sm={12} md={3}>
                   <Tabs
                       orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                       variant="scrollable"
                       value={value}
                       onChange={handleChange}
                       aria-label="user profile"
                       sx={{
                           borderRadius: '12px',
                           maxWidth: isSmallScreen ? '100%' : '270px',
                           borderColor: 'divider',
                           backgroundColor: '#F1F1F1 !important',
                           '.MuiTabs-indicator': {
                               left: 1,
                           },
                           '& .Mui-selected': {
                               backgroundColor: '#F1F1F1 !important',
                               color: '#1B4B66 !important',
                               padding: 0
                           },
                       }}
                   >
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>Personal Information <NavigateNextIcon /></div>}{...a11yProps(0)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>My Orders <NavigateNextIcon /></div>} {...a11yProps(1)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>My Address Book <NavigateNextIcon /></div>} {...a11yProps(2)} />
                   </Tabs>
               </Grid>
                 <Grid item xs={12} sm={9}>
                     <TabPanel value={value} index={value}>
                         <Outlet/>
                     </TabPanel>
                 </Grid>
             </Grid>

         </Box>
     </div>
    );
}

export default UserProfileLayout;
