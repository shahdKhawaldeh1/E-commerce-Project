import React from 'react'
import { Paper, Button, Box, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const SubTitleStyle = {
    paddingBottom: '30px',
    paddingLeft: '20px',
    width: '80%',
    color: 'primary.main',
    '@media (max-width: 320px)': {
        fontSize: '0.5rem',
        padding: 0
    },
    '@media (min-width: 321px) and (max-width: 425px)': {
        fontSize: '0.8rem',
        padding: 0,
        paddingTop: '8px',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
        fontSize: '1.3rem',
        padding: 0,
        paddingTop: '13px',
    },
}
const HeroItem = ({ item }) => {
    const navigate = useNavigate();
    styled(Typography)(({ theme }) => ({
        padding: '20px',
        fontWeight: 'bold',
        color: theme.palette.primary.main,

        [theme.breakpoints.down('md')]: {
            padding: '1px',
            fontSize: '23px',
        },

    }));
    return (
        <Box
            sx={{ position: 'relative', margin: ['20px', '18px', '16px', '14px', '10px'] }}>
            <img src={item.image} alt={item.title} aria-label={item.title} style={{ width: '100%',borderRadius: '12px' }} />
            <Paper
                sx={{
                    position: 'absolute',
                    top: '8%',
                    right: 0,
                    width: '55%',
                    height: '75%',
                    padding: '5px',
                    backgroundColor: 'rgba(222, 222, 222, 0.7)',
                }}>

                <Typography color={"primary.main"} variant={"h2"}>
                    {item.title}
                </Typography>

                <Typography sx={SubTitleStyle} variant={'h3'}>
                    {item.subtitle}
                </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: '22px' }}>
                    <Button variant="contained" onClick={() =>navigate(`/products?categoryId=${item.id}`)} aria-label={`See more about ${item.title}`}>
                        <ArrowRightAltIcon />
                        see more
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default HeroItem

