import {Container} from "@mui/system";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ReactComponent as NotFoundIcon} from "../assets/icons/error-404.svg";

const NotFoundPage = () => {

    const navigate = useNavigate()
    return(
        <Container sx={{display:'flex', flexDirection: 'column',gap: '1rem', alignItems: 'center', marginTop: '2rem'}}>
            <NotFoundIcon
                style={{ width: '50%', height: 'auto' }}
            />
            <Typography variant={'h2'} component={'h2'} color={'primary.main'}>
                Page Not Found :(
            </Typography>
            <Typography variant={'body1'} component={'h3'} color={'lightText.main'}>
                Please back to home page
            </Typography>
            <Button onClick={() => navigate('/')} variant="contained">Home Page</Button>
        </Container>
    )
}

export default NotFoundPage;