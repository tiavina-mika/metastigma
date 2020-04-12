import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { navHeight, primaryColor } from '../../utils/constants';
import { useGetData } from '../../hooks/useGetData';
import { slugify } from '../../utils/utils';

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
            height: navHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
        },
    },
    activeItem: {
        backgroundColor: primaryColor,
        color: '#fff'
    },
    itemMobile: {
        padding: 10,
        borderBottom: '1px solid #888888',
    }
}));

// const data = [
//     {
//         link: 'Philosophie',
//         url: 'philosophie'
//     },
//     {
//         link: 'Littérature',
//         url: 'litterature'
//     },
    
// ]

const Navigation = ({ isMobile }) => {
    const classes = useStyles();
    const location = useLocation();
    const [ data ] = useGetData({ category: true })

    return (
        <Box className={isMobile? classes.navigationMobile: classes.navigation}>
            {data && data.map((d, i) => (
                    <Box className={clsx(isMobile? classes.itemMobile: classes.item, location.pathname.includes(d.url)? classes.activeItem: null)} key={i}>
                    {/* <Box className={isMobile? classes.itemMobile: classes.item, location.pathname.includes(d.url)? classes.activeItem: null} key={i}> */}
                        <Link className={clsx(classes.link, classes.linkInactive)} to={slugify(d)}>
                            { d }
                        </Link>                        
                    </Box>
                ))
            }
        </Box>
    );
}

export default Navigation;