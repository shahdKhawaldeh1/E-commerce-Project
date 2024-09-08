import HeroSection from '../components/HomePageComponents/HeroSection/HeroSection'
import NewArrival from '../components/HomePageComponents/NewArrival/NewArrival'
import HandpickedCollections from '../components/HomePageComponents/HandpickedCollections/HandpickedCollections'
import ShopByBrands from '../components/HomePageComponents/ShopByBrands/ShopByBrands'
import FilteredSection from '../components/HomePageComponents/FilteredSection/FilteredSection'
import Box from "@mui/material/Box";
import {useOutletContext} from "react-router-dom";
import {useEffect, useRef} from "react";
import { useQuery } from 'react-query'
import { apiAxios } from '../api/axiosConfig'
const HomePage = () => {

    const { section } = useOutletContext();

    const featuredSection = useRef(null);
    const trendySection = useRef(null);
    const brandsSection = useRef(null);
     const useProductsByBrand = () => {
     return useQuery({
            queryKey: ['brands'],
            queryFn: () => apiAxios.get(`/homePage`).then(res => res.data.categories),  // Assuming the response has a `brands` array
            onError: (error) => {
                console.error('Error fetching brands:', error);
            },
            staleTime: Infinity,
        });
    };

 const categories=useProductsByBrand.data;
 console.log(categories);
    useEffect(() => {
        switch (section) {
            case "Featured":
                featuredSection.current?.scrollIntoView({
                    behavior: "smooth",

                });
                break;
            case "Trendy":
                trendySection.current?.scrollIntoView({
                    behavior: "smooth",

                });
                break;
            case "Brands":
                brandsSection.current?.scrollIntoView({
                    behavior: "smooth",

                });
                break;
            default:
                break;
        }
    }, [section]);


    return (
        <div style={{display:"flex", flexDirection:'column', justifyContent: 'center'}}>
            <Box component={""} style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '2rem'}} >
                <HeroSection />
                <NewArrival />
            </Box>
            <HandpickedCollections innerRef={featuredSection}/>
            <ShopByBrands innerRef={brandsSection}/>
            <FilteredSection innerRef={trendySection}/>
        </div>
    )
}
export default HomePage