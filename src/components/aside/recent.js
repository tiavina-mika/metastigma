import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { items } from '../../utils/data/articles';
import { slugify, getRecents, getCategories } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    link: {
        color: '#222222',
        fontWeight: 400,
        fontSize: 18,
        fontFamily: 'Playfair Display',
        textDecoration: 'none',
        lineHeight: 1.8,
        '&:hover': {
            textDecoration: 'underline'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        }
    },
}));

const Recent = ({ category }) => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const arr = category? [...getCategories(items)]: [...getRecents(items)];
        setData(arr);
    }, [category]);

    return (
        <Box className={classes.root}>
            { data.length > 0 
                ? data.map((d, i) => (
                    <Box key={i} mb={i !== data.length - 1? 2: 0}>
                        <Link className={classes.link} to={slugify(d)}>
                            { d }
                        </Link>
                    </Box>))
                : <Typography>Pas d'article</Typography>
            }
        </Box>
    );
}

export default Recent;