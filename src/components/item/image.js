import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '65%',
        [theme.breakpoints.up('md')]: {
            width: '50%'
        },
    },
    text: {
        fontSize: 14,
        color: '#222'
    }
}));

const Image = ({ name, legend }) => {
    const classes = useStyles();

    return (
        <Box mt={4}>
            <Box className={classes.imageContainer}>
                <img src={`${process.env.PUBLIC_URL}/images/${name}`} alt={legend} className={classes.image}/> 
            </Box>
            <Box display="flex" justifyContent="center" mt={1} mb={2}>
                <Typography className={classes.text} variant="h3">
                    { legend }
                </Typography>
            </Box>
        </Box>
    )
};
    
export default Image;