

// Life-style card style

import {Box, Card, styled, Typography} from "@mui/material";

export const LifeStyleBox = styled(Box)(() => ({
    position: 'absolute',
    top: '45%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    bottom: 0,
    width: '100%',
    color: 'white',
}));

 export const LIFESTYLETypographyH2 = styled(Typography)(({ theme }) => ({
     color: '#97451F',
     fontWeight: 400,
    [theme.breakpoints.up('xs')]: {
        fontSize: '10px',
    },[theme.breakpoints.up('sm')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '30px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '45px',
    }
}));

 export const LIFESTYLETypographyP = styled(Typography)(({ theme }) => ({
     color: '#97451F',
     fontWeight: 700,

    [theme.breakpoints.up('xs')]: {
        fontSize: '14px',
        maxWidth: '55%',
    },[theme.breakpoints.up('sm')]: {
        fontSize: '20px',
         maxWidth: '45%',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '30px',
        maxWidth: '40%',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
        maxWidth: '35%',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '52px',
        maxWidth: '45%',
    }
}));


 // default filter card style

export const DefaultStyleBox = styled(Box)(() => ({
    position: 'absolute',
    top: '10%',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    right: '1rem',
}));

export const BottomCard = styled(Card)(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: '10px',
    cursor: 'pointer',
    ':hover': {
        border: '1px solid #1B4B66',
    },
    // Mobile Small
    '@media (max-width: 425px)': {
        height: '100px'
    },

    // Tablet Small
    '@media (min-width: 768px)': {
        height: '100%'
    },


}));

export const DefaultTypographyH2 = styled(Typography)(({ theme }) => ({

    fontWeight: 800,
    width: '80px',

    '@media (min-width: 320px)': {
        fontSize: '13px',
        marginBottom: '20px',
        '.arrow-icon': {
            width: '24px',
            height: '24px',
        },
    },

    '@media (min-width: 375px)': {
        fontSize: '15px',

        marginBottom: '15px',
        '.arrow-icon': {
            width: '24px',
            height: '24px',
        },
    },
    '@media (min-width: 426px) and (max-width: 768px)': {
        fontSize: '20px',

        marginBottom: '15px',
        '.arrow-icon': {
            width: '30px',
            height: '30px',
        },
    },
    '@media (min-width: 769px) and (max-width: 1024px)': {
        fontSize: '30px',
        width: '150px',
        marginBottom: '15px',
        '.arrow-icon': {
            width: '40px',
            height: '40px',
        },
    },
    '@media (min-width: 1025px)': {
        fontSize: '40px',
        width: '150px',
        marginBottom: '30px',
        '.arrow-icon': {
            width: '50px',
            height: '50px',
        },
    },


    [theme.breakpoints.up('xl')]: {
        fontSize: '40px',
        lineHeight: '52px',

    }
}));