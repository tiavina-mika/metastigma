import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { truncate } from '../../utils/utils';
import ContentItems from './content-items';

const useStyles = makeStyles({
    text: {
        color: '#222222',
        fontFamily: 'Montserrat',
        fontSize: 14,
        lineHeight: 1.7,
    },
});

const Content = ({ blocks }) => {
    const classes = useStyles();
    const { slug, genre } = useParams();

    const list = (
        <Typography className={classes.text}>
            { truncate(blocks[0].text, 500) }
        </Typography>
    );
    
    return (
        <Box>
            { genre && slug
                ? blocks.map(({ text, blockTitle, blockImage }, index) => <ContentItems 
                        text={text} 
                        blockTitle={blockTitle} 
                        blockImage={blockImage} 
                        key={index} 
                        index={index} 
                    />)
                : list
            }
        </Box>
    );
}

export default Content;