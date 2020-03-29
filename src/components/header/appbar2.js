import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    content: {
        // [theme.breakpoints.down('md')]: {
        //     flexDirection: 'row'
        // },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: 52,
        boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        zIndex: 20,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            paddingTop: 35
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
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: "##222222",
          fontSize: 11
        }
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    navigation: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    item: {
        width: 100
    }
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
                    <Box className={classes.navigation}>
                        <Box className={classes.item}>
                            <Link className={classes.link}>
                                News
                            </Link>                        
                        </Box>
                        <Box className={classes.item}>
                            <Link className={classes.link}>
                                News
                            </Link>                        
                        </Box>
                    </Box>
                    <Box className={classes.right}>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField 
                                InputProps={{
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                                placeholder="Recherchez et tapez entrer" />
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </form>                       
                    </Box>
                </Box>                
            </Box>
            {/* up md */}
            <Box className={classes.navigationMobile}>
                <Box className={classes.item}>
                    <Link className={classes.link}>
                        News
                    </Link>                        
                </Box>
                <Box className={classes.item}>
                    <Link className={classes.link}>
                        News
                    </Link>                        
                </Box>
            </Box>
        </Box>
    );
}

export default AppBar;