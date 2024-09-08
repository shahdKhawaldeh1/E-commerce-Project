import {styled, Typography} from "@mui/material";


export const HandPickedCardStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginBottom: '1rem',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
    '@media (min-width: 320px) and (max-width: 374px)': {
        width: '120px',
        height: '120px',
    },
    '@media (min-width: 375px) and (max-width: 424px)': {
        width: '155px',

    },
    '@media (min-width: 425px) and (max-width: 767px)': {
        width: '175px',
        height: '175px',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
        width: '160px',
        height: '160px',

    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
        width: '220px',
        height: '220px',
    },
    '@media (min-width: 1440px) ': {
        width: '320px',
        height: '320px',
    },
}

export const HandPickedBox = {
    position: 'absolute',
    top: '85%',
    bottom: 0,
    marginLeft: '1rem',
    PaddingY: '1rem'
}

export const HandPickedTypographyH2 = styled(Typography)(() => ({

    fontWeight: 600,

    '@media (min-width: 320px)': {
        fontSize: '13px',
    },

    '@media (min-width: 375px)': {
        fontSize: '15px',

    },
    '@media (min-width: 426px) and (max-width: 768px)': {
        fontSize: '16px',
    },
    '@media (min-width: 769px) and (max-width: 1025px)': {
        fontSize: '20px',
        width: '150px',
    },
    '@media (min-width: 1025px)': {
        fontSize: '22px',
    },

}));