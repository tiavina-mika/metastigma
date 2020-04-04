import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Tag from './tag';
import { slugify } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
    root: {
        // [theme.breakpoints.down('md')]: {
        //     flexDirection: 'column',
        // },
        display: 'flex',
        // backgroundColor: 'red'
        
    },

}));


const Tags = ({ data }) => {
    const { genre, auteur, date } = data;
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Tag text={genre} active to={`/${slugify(genre)}`} />
            <Tag text={auteur} />
            <Tag text={date} />
        </Box>
    );
}

export default Tags;