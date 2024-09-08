
import imgabout from '../assets/images/about.png'
import imgdescription1 from '../assets/images/rectangle.png'
import imgdescription2 from '../assets/images/Rectangle 532.png'
import imgdescription3 from '../assets/images/Rectangle 533.png'
import { Container, Box, Typography, Grid } from '@mui/material'

const AboutPage = () => {

    return (
        <>
            <img src={imgabout} alt="About Page Header" width={'100%'} />
            <Container maxWidth='xl'>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '20px',
                    align: 'center'

                }} >
                    <Typography
                        sx={{ fontSize: '20px', fontWeight: '600', color: 'TypeHighEmphasis.main' }}
                        component={'h1'} varient={'h1'}>About</Typography>

                    <Typography component={'p'} varient={'body1'}
                        sx={{ width: '53%', fontSize: '16px', fontWeight: '400', color: 'TypeLowEmphasis.main', textAlign: 'center' }}
                    >Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </Typography>

                </Box>

                <Grid container spacing={4} sx={{ marginTop: '15px' }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box >
                            <Typography
                                sx={{ fontSize: '20px', fontWeight: '600', color: 'TypeHighEmphasis.main' }}
                                component={'h2'} varient={'h1'}>About</Typography>

                            <Typography component={'p'} varient={'body1'}
                                sx={{ fontSize: '16px', fontWeight: '400', color: 'TypeLowEmphasis.main', }}
                            >Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={imgdescription1} alt="Description 1" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{ marginTop: '15px' }}>
                    <Grid item xs={12} md={6} >
                        <img src={imgdescription2} alt="Description 2" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box>
                            <Typography
                                sx={{ fontSize: '20px', fontWeight: '600', color: 'TypeHighEmphasis.main' }}
                                component={'h2'} varient={'h1'}>About</Typography>

                            <Typography component={'p'} varient={'body1'}
                                sx={{ fontSize: '16px', fontWeight: '400', color: 'TypeLowEmphasis.main' }}
                            >Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </Typography>
                        </Box>
                    </Grid>

                </Grid>

                <Grid container spacing={4} sx={{ marginTop: '15px' }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box>
                            <Typography
                                sx={{ fontSize: '20px', fontWeight: '600', color: 'TypeHighEmphasis.main' }}
                                component={'h2'} varient={'h1'}>About</Typography>

                            <Typography component={'p'} varient={'body1'}
                                sx={{ fontSize: '16px', fontWeight: '400', color: 'TypeLowEmphasis.main' }}
                            >Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={imgdescription3} alt="Description 3" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutPage