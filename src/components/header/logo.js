import React from 'react';
import Box from '@material-ui/core/Box';

const Logo = () => {

    return (
        <Box display="flex" justifyContent="center" alignItems="center" py={5} px={3}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="logo" />
        </Box>
    )
}

export default Logo;
