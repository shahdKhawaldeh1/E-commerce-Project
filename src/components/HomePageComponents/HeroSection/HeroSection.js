import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroItem from './HeroItem/HeroItem'
import {HeroSectionData} from "../../../utils/consts";

const HeroSection = () => {
  const settings = {
    indicatorIconButtonProps: {
      style: {
        display: "none",
      },
    },
    animation: "slide",
    duration: 1000,
  };
  return (

      <section id="hero-section" role="banner" aria-label="Hero Section">
        <Carousel  maxWidth='xl' sx={{ borderRadius: "10px",  width: '100%',marginBottom: '2rem' }} {...settings}>
          {
              HeroSectionData.map((item, i) => <HeroItem key={i} item={item} />)
          }
        </Carousel>
      </section>

  )
}

export default HeroSection