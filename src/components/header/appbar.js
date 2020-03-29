import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';

import Navigation from './navigation';
import Search from './search';
import { navHeight, mainWidth } from '../../utils/constants';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        zIndex: 20,
        [theme.breakpoints.up('md')]: {
            height: navHeight,
            boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.05)',
            position: 'relative',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            width: '100%'
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.05)',
            position: 'relative',
        },
        [theme.breakpoints.up('md')]: {
            width: mainWidth,
        },
    },
    link: {
        textTransform: 'uppercase',
        fontFamily: 'Open Sans, Georgia, serif',
        color:' #222222',
        fontSize: 14,
        lineHeight: 1.7,
        textDecoration: 'none',
        '&:hover': {
            color: '#888888'
        }
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
}));

const AppBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => setOpen(!open);

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleOpen}>
                    <MenuIcon />
                </IconButton>
                <Box className={classes.main}>
                    {/* up md */}
                    <Navigation />
                    <Box className={classes.right}>
                        <Search />                    
                    </Box>
                </Box>                
            </Box>
            {/* up md */}
            { open && <Navigation isMobile={true} /> }
        </Box>
    );
}

export default AppBar;