import React, {useEffect} from 'react';
import { Stack, Alert } from '@mui/material';

const AlertStack = (props) => {
    const { successVisible, errorVisible, warningVisible, onCloseAlert, message } = props;

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (successVisible) {
                onCloseAlert('success');
            } else if (errorVisible) {
                onCloseAlert('error');
            } else if (warningVisible) {
                onCloseAlert('warning');
            }
        }, 5000);

        return () => clearTimeout(timeout);
    }, [successVisible, errorVisible, warningVisible, onCloseAlert]);

    return (
        <Stack style={{ position: 'fixed', top: 120, right: 20, zIndex: 9999 }} spacing={2}>
            {successVisible && (
                <Alert
                    severity="success"
                    onClose={() => onCloseAlert('success')}
                    sx={{ backgroundColor: '#43a047', color: 'white' }}
                >
                    {message}
                </Alert>
            )}
            {errorVisible && (
                <Alert
                    severity="error"
                    sx={{ backgroundColor: 'error.main', color: 'white' }}
                    onClose={() => onCloseAlert('error')}
                >
                    {message}
                </Alert>
            )}
            {warningVisible && (
                <Alert
                    severity="warning"
                    onClose={() => onCloseAlert('warning')}
                >
                    {message}
                </Alert>
            )}
        </Stack>
    );
};

export default AlertStack;
