import React from 'react'
import {Card, CardMedia, Grid, Typography} from "@mui/material";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow.svg";
import {useNavigate } from 'react-router-dom';
import {
    BottomCard,
    DefaultStyleBox,
    DefaultTypographyH2,
    LifeStyleBox,
    LIFESTYLETypographyH2,
    LIFESTYLETypographyP
} from "./styels";



const FilteredSection = (props) => {

    const {innerRef} = props;
    const navigate = useNavigate()

    const handleAccessoriesCardClick = () => {
        navigate("/products/itemCardOne");
    };

    const handleSkincareCardClick = () => {
        navigate("/products/itemCardTwo");
    };

  return (

      <Grid component={'section'}  aria-labelledby="makeup-skincare-heading"
            role="region" ref={innerRef}  container spacing={2} sx={{marginTop: '1rem'}}>
          <Typography
              component={'h2'}
              variant={'h2'}
              sx={{marginLeft: '2rem'}}
              id="makeup-skincare-heading"
          >
              Makeup & Skincare
          </Typography>
          <Grid item xs={12}  sx={{margin: '1rem'}}>
              <Card onClick={handleAccessoriesCardClick } sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',  borderRadius: '8px', cursor: 'pointer', ':hover': {
                      border: '1px solid #1B4B66',
                  }, }}  >
                  <CardMedia 
                      component="img"
                      image={require('../../../assets/images/filtterdSecton-1st-image.jpg')}
                      sx={{ height: '100%', width: 'cover' }}
                  />
                      <LifeStyleBox >
                          <LIFESTYLETypographyH2 component={'h2'}>
                              LIFESTYLE
                          </LIFESTYLETypographyH2>
                          <LIFESTYLETypographyP component={'p'} >
                              Makeup Accessories from Top Brands
                          </LIFESTYLETypographyP>
                      </LifeStyleBox>
              </Card>
          </Grid>
          <Grid container sx={{margin: '1rem'}} spacing={2}>
              <Grid item xs={6}>
                  <BottomCard onClick={handleSkincareCardClick }>
                      <CardMedia
                          sx={{ height: '100%', width: 'cover' }}
                          component="img"
                          image={require('../../../assets/images/Group 139.png')}
                      />
                      <DefaultStyleBox>
                          <DefaultTypographyH2 component={"h2"} sx={{color: '#A53F64'}} dir="rtl">
                              Skincare Essentials
                          </DefaultTypographyH2>
                          <DefaultTypographyH2 component={"h2"} sx={{color: '#A53F64'}} dir="rtl">
                              <ArrowIcon />
                          </DefaultTypographyH2>
                      </DefaultStyleBox>
                  </BottomCard>
              </Grid>
              <Grid item xs={6}>
                  <BottomCard onClick={handleSkincareCardClick }>
                      <CardMedia
                          sx={{ height: '100%', width: 'cover' }}
                          component="img"
                          image={require('../../../assets/images/skincare 1.jpg')}
                      />
                      <DefaultStyleBox>
                          <DefaultTypographyH2 component={"h2"} sx={{color: 'primary.main'}} dir="rtl">
                              Facepacks & Peels
                          </DefaultTypographyH2>
                          <DefaultTypographyH2 component={"h2"} sx={{color: 'primary.main'}} dir="rtl">
                              <ArrowIcon />
                          </DefaultTypographyH2>
                      </DefaultStyleBox>
                  </BottomCard>
              </Grid>
          </Grid>

      </Grid>
  )
}

export default FilteredSection