import React from 'react';

import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Header from './Header';

function Layout({children}) {
    return (
        <>
        <Header/>
        <Container maxWidth="lg">
        {children}
        </Container>
        </>
    );
}

export default Layout;