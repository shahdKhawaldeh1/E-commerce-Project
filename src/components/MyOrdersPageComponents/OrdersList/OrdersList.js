
import {
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {styled} from "@mui/system";
import {convertDateFormat} from "../../../utils/convertDateFormat";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {

        color: theme.palette.TypeLowEmphasis.main,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

    backgroundColor: theme.palette.action.hover,
    border: "2px solid",
    borderRadius: '20px',



    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const OrdersList = (props) => {

    const {orders, isLoading, isError} = props

    const navigate = useNavigate()

    if (isLoading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    if (!orders || isError || orders.length ===0) {
        return (<Typography variant={'body1'} component={'span'}>No Orders up to now</Typography>)
    }
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table   aria-label="orders table" sx={{ borderCollapse: "separate", borderSpacing: "0 10px"}}>
                <TableHead>
                    <TableRow >
                        <StyledTableCell align="center">Order ID</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.orders.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{convertDateFormat(row.updatedAt)}</StyledTableCell>
                            <StyledTableCell align="center">${row.totalPrice.toFixed(2)}</StyledTableCell>
                            <StyledTableCell align="center" sx={{color: 'primary.main'}}>{row.status}</StyledTableCell>
                            <StyledTableCell align="center"><NavigateNextIcon cursor="pointer" onClick={() => navigate(`${row.id}`)}/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrdersList;