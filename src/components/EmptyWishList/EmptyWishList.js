import {useNavigate} from "react-router-dom";
import {Container} from "@mui/system";
import {Button, CardMedia, Typography} from "@mui/material";
import EmptyWishListImage from "../../assets/images/empty-wishlist.png";


const EmptyWishList = () => {
    const navigate = useNavigate()
    return (
        <Container sx={{display:'flex', flexDirection: 'column',gap: '1rem', alignItems: 'center', marginTop: '2rem'}}>
            <CardMedia
                sx={{ height: 300 , width: '300px'}}
                image={EmptyWishListImage}
                title="Empty Cart Image"
            />
            <Typography variant={'h2'} component={'h2'} color={'primary.main'}>
                Your WishList ♡ is Empty :(
            </Typography>
            <Typography variant={'h3'} component={'h3'} color={'lightText.main'}>
                Add some Products to it
            </Typography>
            <Button onClick={() => navigate('/')} variant="contained">Home Page</Button>
        </Container>
    )
}

export default EmptyWishList