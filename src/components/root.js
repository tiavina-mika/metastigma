
import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './header/appbar';
import Logo from './header/logo';
import Main from './main';

const Root = props => {
    const { children } = props;
    return <Box> 
                <CssBaseline />
                <Box>
                    <Header />
                    <Logo />
                    <Main children={children} />
                </Box>
            </Box>
}

export default Root;