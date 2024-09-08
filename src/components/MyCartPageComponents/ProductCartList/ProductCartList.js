import React, { useState } from 'react';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    useMediaQuery,
} from '@mui/material';
import ProductCartCard from './ProductCartCard/ProductCartCard';
import {
    useMoveToWishlist,
    useRemoveFromCart,
} from '../../../hooks/useAppAPIs';
import AlertStack from '../../AlertStack/AlertStack';
import CircularProgress from '@mui/material/CircularProgress';

const ProductCartList = (props) => {
    const { cartProducts, showTable = true, showButtons = true } = props;

    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [loadingRemoveButtonId, setLoadingRemoveButtonId] = useState(null);
    const [loadingWishlistButtonId, setLoadingWishlistButtonId] = useState(null);

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');

    const RemoveFromCartMutation = useRemoveFromCart();
    const MoveProductToWishlist = useMoveToWishlist();
    const handelRemoveProduct = async (productId) => {
        try {
            setLoadingRemoveButtonId(productId);
            const response = await RemoveFromCartMutation.mutateAsync(productId);

            setMessage('Product deleted successfully from cart.');
            setSuccessAlertVisible(true);
        } catch (error) {
            setMessage(error.message);
            setErrorAlertVisible(true);
        } finally {
            setLoadingRemoveButtonId(null);
        }
    };
    const handelMoveProductToWishlist = async (productId) => {
        try {
            setLoadingWishlistButtonId(productId);
            const response = await MoveProductToWishlist.mutateAsync(productId);

            setMessage(response.message);
            setSuccessAlertVisible(true);
        } catch (error) {
            setMessage(error.response.data.error);
            setErrorAlertVisible(true);
        } finally {
            setLoadingWishlistButtonId(null);
        }
    };

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };

    return (
        <Paper elevation={0} component="div">
            <Table aria-label="cart items list">
                {!isSmallScreen && showTable && (
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                )}

                <TableBody>
                    {cartProducts.map((product) => (
                        <React.Fragment key={product.id}>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    <ProductCartCard product={product} />
                                </TableCell>

                                {!isSmallScreen && showTable && (
                                    <>
                                        <TableCell align="right">
                                            ${product.discountedPrice > 0
                                            ? product.discountedPrice.toFixed(2)
                                            : product.price.toFixed(2)}
                                        </TableCell>
                                        <TableCell align="right">{product.quantity}</TableCell>
                                        <TableCell align="right">
                                            ${product.totalPrice.toFixed(2)}
                                        </TableCell>
                                    </>
                                )}
                            </TableRow>

                            {showButtons && (
                                <TableRow>
                                    <TableCell colSpan={4} align="right">
                                        <Button
                                            aria-label={`Move ${product.name} to Wishlist`}
                                            sx={{
                                                color: 'primary.main',
                                                borderBottom: '1px solid',
                                                paddingBottom: '2px',
                                                borderRadius: 0,
                                                marginRight: '1rem',
                                                right: '2rem',
                                                bottom: [
                                                    'initial',
                                                    'initial',
                                                    '4rem',
                                                ],
                                            }}
                                            startIcon={
                                                loadingWishlistButtonId === product.id ? (
                                                    <CircularProgress size={'20px'} sx={{ color: 'primary.main' }} />
                                                ) : (
                                                    ''
                                                )
                                            }
                                            onClick={() => handelMoveProductToWishlist(product.id)}
                                        >
                                            Move to Wishlist
                                        </Button>
                                        <Button
                                            aria-label={`Remove ${product.name} from Cart`}
                                            sx={{
                                                color: 'error.main',
                                                borderBottom: '1px solid',
                                                paddingBottom: '2px',
                                                borderRadius: 0,
                                                right: '1rem',
                                                bottom: [
                                                    'initial',
                                                    'initial',
                                                    '4rem',
                                                ],
                                            }}
                                            startIcon={
                                                loadingRemoveButtonId === product.id ? (
                                                    <CircularProgress size={'20px'} sx={{ color: 'error.main' }} />
                                                ) : (
                                                    ''
                                                )
                                            }
                                            onClick={() => handelRemoveProduct(product.id)}
                                        >
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
            <AlertStack
                warningVisible={warningAlertVisible}
                successVisible={successAlertVisible}
                errorVisible={errorAlertVisible}
                onCloseAlert={handleCloseAlert}
                message={message}
            />
        </Paper>
    );
};

export default ProductCartList;
