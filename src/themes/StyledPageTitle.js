import {styled} from "@mui/system";
import {Typography} from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme ,  sx}) => ({
    fontSize: '34px',
    color: theme.palette.primary.main,
    marginBottom: '20px',

    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        marginBottom: '10px',
        marginTop: '10px',
    },
    ...(sx || {}),
}));