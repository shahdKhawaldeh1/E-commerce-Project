import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography, useMediaQuery
} from "@mui/material";

import  theme  from '../../themes/customTheme'
import FooterContainer from "./FooterContainer";

export default function Footer(props) {

    const {setSection} = props;
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {isSmallScreen ?  <AppBar position="relative" sx={{ top: 'auto', bottom: 0, marginTop: '1rem' }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant={'h2'} component={'h2'} color={'TypeLowEmphasis.main'}>More about CORA’L</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'primary.main'}}>
                        <FooterContainer setSection={setSection}/>
                    </AccordionDetails>
                </Accordion>
            </AppBar> : <AppBar position="static" sx={{ top: 'auto', bottom: 0, marginTop: '3rem'  }}> <FooterContainer setSection={setSection}/> </AppBar>}
        </>
    )
}
