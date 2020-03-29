
import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { mainWidth } from '../utils/constants';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
    },
    main: {
        display: "flex",
        backgroundColor: "green",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        width: mainWidth,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: "center",
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'flex-start',
            paddingLeft: 10,
            paddingRight: 10,
        },
    },
    aside: {
        [theme.breakpoints.down('md')]: {
            marginTop: 20,
        },
    },
    
}));

const Main = ({ children }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.main}>
                <Box className={classes.content}>
                    {children}
                </Box>
                <Box className={clsx(classes.aside, classes.content)}>
                    <h1>Aside</h1>
                </Box>
            </Box>
        </Box>
    )
}

export default Main;