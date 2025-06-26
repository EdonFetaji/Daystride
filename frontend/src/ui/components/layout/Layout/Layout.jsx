import React from 'react';
import {Box, Container} from '@mui/material';
import Header from '../Header/Header.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <Box sx={{minHeight: '100vh', backgroundColor: '#f3f4f6', color: '#1a1a1a', overflow: 'hidden'}}>

            <Header/>
            <Container disableGutters maxWidth="xl">

                <Outlet/>
            </Container>
        </Box>
    );
};

export default Layout;
