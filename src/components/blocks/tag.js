import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { primaryColor, primaryFont } from '../../utils/constants';

const useStyles = makeStyles({
    root: {
        marginRight: 20,
        padding: '2px 10px 2px 10px',
        borderRadius: 2
    },
    rootActive: {
        backgroundColor: primaryColor
    },
    text: {
        textTransform: 'uppercase',
        fontFamily: primaryFont,
        fontSize: 12,
        lineHeight: 1.7,
        textDecoration: 'none',
    },
    link: {
        color: '#fff',
        '&:hover': {
            color: '#888888'
        }
    },
    linkInactive: {
        color: '#777',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
});


const Tag = ({ text, active, to }) => {
    const classes = useStyles();

    return (
        <Box className={clsx(classes.root, active? classes.rootActive: undefined)}>
               <Link className={clsx(classes.text, active? classes.link: classes.linkInactive)} to={to}>
                    { text }
                </Link>  
        </Box>
    );
}

export default Tag;