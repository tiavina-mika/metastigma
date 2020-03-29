import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { navHeight } from '../../utils/constants';

const useStyles = makeStyles(theme => ({
    link: {
        textTransform: 'uppercase',
        fontFamily: 'Open Sans, Georgia, serif',
        fontSize: 14,
        lineHeight: 1.7,
        textDecoration: 'none',
        '&:hover': {
            color: '#888888'
        }
    },
    linkInactive: {
        color:' #222222',
    },
    linkActive: {
        color:' #fff',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            height: navHeight,
        },
    },
    item: {
        width: 200,
        [theme.breakpoints.up('md')]: {
            backgroundColor: '#008cff',
            height: navHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
        },
    },
    itemMobile: {
        padding: 10,
        borderBottom: '1px solid #888888',
    }
}));

const data = [
    {
        link: 'Philosophie',
        url: 'philosophie'
    },
    {
        link: 'Littérature',
        url: 'litterature'
    },
    
]

const Navigation = ({ isMobile }) => {
    const classes = useStyles();

    return (
        <Box className={isMobile? classes.navigationMobile: classes.navigation}>
            {data && data.map((d, i) => (
                    <Box className={isMobile? classes.itemMobile: classes.item} key={i}>
                        <Link className={clsx(classes.link, classes.linkInactive)}>
                            { d.link }
                        </Link>                        
                    </Box>
                ))
            }
        </Box>
    );
}

export default Navigation;