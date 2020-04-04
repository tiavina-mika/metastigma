import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { primaryFont } from '../../utils/constants';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#f1f1f1',
        padding: '8px 20px 7px',
        flex: 1,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center'
        },
    },
    text: {
        color: '#666666',
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        fontWeight: 500,
        fontFamily: primaryFont
    },

}));

const Title = ({ text }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.text}>
                { text }
            </Typography>
        </Box>
    );
}

export default Title;