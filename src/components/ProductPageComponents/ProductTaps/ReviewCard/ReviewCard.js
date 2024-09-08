import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Avatar, Grid, LinearProgress, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {MainReviewCardStyle, userInfoCardStyle} from "./style";
import Box from "@mui/material/Box";
import {useReviews} from "../../../../hooks/useAppAPIs";
import {useParams} from "react-router-dom";

 const ReviewCard = () => {

     const {id} = useParams()

     const {data:reviews, isLoading, isError} = useReviews(id)

     if (isLoading) {
         return (
             <Box sx={{ width: '100%' }}>
                 <LinearProgress />
             </Box>
         )
     }
     if (!reviews || isError || reviews.length ===0) {
         return (<Typography sx={{color: 'primary.main'}} variant={'h3'} component={'h2'}>No Reviews yet !!</Typography>)
     }
    return (
       <>
           {
               reviews &&
               reviews.reviews.map((review, index) => {

                   return (
                       <Grid key={review.id}  item xs={12} sm={6} md={4} lg={4}>
                           <Card key={index} sx={MainReviewCardStyle}>

                               <Grid container spacing={1}>
                                   <Grid item xs={12} sx={{marginTop: '1rem', marginLeft: '1rem'}}>
                                       <Rating name="half-rating-read"
                                               defaultValue={2.5}
                                               precision={0.5}
                                               value={review.rating}
                                               readOnly
                                               emptyIcon={<StarIcon style={{ color: '#FFFFFF' }} fontSize="inherit" />}
                                       />
                                   </Grid>
                                   <Grid item xs={12} md={5} lg={4}>
                                       <Box sx={userInfoCardStyle}>
                                           <Avatar sx={{borderRadius: '8px', marginBottom: '5px'}} variant="square" src={review.user.image}/>
                                           <Typography noWrap sx={{color: 'primary.main', fontWeight: 600}} variant={'h6'} component={'h2'}>{review.user ? `${review.user.firstName} ${review.user.lastName}` : 'User'}</Typography>
                                           <Typography sx={{ color: 'lightText.dark', fontWeight: 400}} variant={'h6'} component={'h2'}>{review.created_at}</Typography>
                                       </Box>
                                   </Grid>
                                   <Grid item xs={12} md={7} lg={7}>

                                           <Typography paragraph sx={{color: 'primary.contrastText', height:'40%', marginLeft: '1rem', marginRight: '1rem', '@media (min-width: 600px)': { marginTop:'1rem'},}} variant="body2">
                                               {`"${review.comment}"`}
                                           </Typography>

                                   </Grid>
                               </Grid>

                           </Card>
                       </Grid>

                   )
               })
           }
       </>
    );
}

export default ReviewCard;


