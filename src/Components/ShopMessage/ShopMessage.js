//IMPORTS
import * as React from 'react';
//Material UI
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ShopMessage = ({ purchaseID, buyer }) => {
    return (
        <Stack sx={{ width: '100%', textAlign: "left" }} spacing={2}>
            <Alert color="info" variant="outlined" severity="success">
            COMPRA FINALIZADA!! Estimado/a {buyer.name} {buyer.lastName} 
            <br />
            Su orden de compra es: {purchaseID}
            <br />
            En unos instantes te enviaremos los instructivos de la compra a {buyer.email}
            </Alert>
        </Stack>
    );
};

export default ShopMessage;