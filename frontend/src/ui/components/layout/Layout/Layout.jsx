import React from 'react';
import {Box, Container} from '@mui/material';
import Header from '../Header/Header.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <Box sx={{minHeight: '100vh', backgroundColor: '#1a202c', color: '#f0f0f0'}}>
            <Header/>
            <Container sx={{my: 4}} maxWidth="xl">
                <Outlet/>
            </Container>
        </Box>
    );
};

export default Layout;
