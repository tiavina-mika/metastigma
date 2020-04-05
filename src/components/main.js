
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Aside from './aside/aside';
import { mainWidth, primaryFont } from '../utils/constants';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'stretch',
    },
    main: {
        display: "flex",
        // backgroundColor: "green",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        width: mainWidth,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: "center",
            width: '100%'

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
    right: {
        [theme.breakpoints.up('md')]: {
            flex: 1.2,
            marginLeft: 10
        },
    },
    left: {
        [theme.breakpoints.up('md')]: {
            flex: 3,
        },
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 70,
        borderTop: '1px solid #e5e5e5'
    },
    footerText: {
        fontFamily: primaryFont,
        fontSize: 13,
        color: '#777777',
        [theme.breakpoints.down('md')]: {
           marginTop: theme.spacing(0.5),
           marginBottom: theme.spacing(0.5),
           fontSize: 12
        },
    },
    link: {
        marginLeft: 5
    }
}));

const Main = ({ children }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.main}>
                <Box className={clsx(classes.left, classes.content)}>
                    {children}
                </Box>
                <Box className={clsx(classes.right, classes.content)}>
                    <Aside />
                </Box>
            </Box>
            <Box className={classes.footer}>
                <Box className={classes.main}>
                    <Box>
                        <Typography className={classes.footerText}>Copyright © { new Date().getFullYear() } . Tous droits réservés</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography className={classes.footerText}>Designé et développé par</Typography>
                        <Link className={clsx(classes.footerText, classes.link)} to="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
                            Tiavina Michael Ralainirina
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Main;