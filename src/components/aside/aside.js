import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Block from './block';
import Recent from './recent';
import Citation from './citation';
import Book from './book';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        [theme.breakpoints.up('md')]: {
            padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
        },
    },
    title: {
    }
}));

const Aside = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Block title="Articles Récentes">
                <Recent />
            </Block>
            <Block title="Catégories">
                <Recent category/>
            </Block>
            <Block title="Citation du jour">
                <Citation />
            </Block>
            <Block title="Livre du jour">
                <Book />
            </Block>
        </Box>
    );
}

export default Aside;