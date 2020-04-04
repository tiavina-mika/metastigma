import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { primaryFont } from '../../utils/constants';
import Image from './image';

const useStyles = makeStyles({
    text: {
        color: '#222222',
        fontFamily: 'Montserrat',
        whiteSpace: 'pre-line',
        fontSize: 16,
        lineHeight: 1.6,
    },
    title: {
        color: '#000',
        fontFamily: primaryFont,
        lineHeight: 1.9,
        fontSize: 16,
        fontWeight: 700
    },
    
});

const ContentItems = ({ blockTitle, blockImage, text, index }) => {
    const classes = useStyles();

    return (
        <Box mt={index !== 0? 5: 0}>
            { blockTitle && <Box my={1}>
                <Typography className={classes.title} variant="h3">
                    { blockTitle }
                </Typography>
            </Box> }
            <Box>
                <Typography className={classes.text}>
                    { text }
                </Typography>
            </Box>
            { blockImage && <Image name={blockImage.name} legend={blockImage.legend} />}
        </Box>
    )
};
    
export default ContentItems;