import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Tags from '../blocks/tags';
import { Typography, Button } from '@material-ui/core';
import { primaryColor } from '../../utils/constants';
import { slugify } from '../../utils/utils';
import Content from './content';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(6)
    },
    rootNotFirst: {
        marginTop: theme.spacing(6)
    },
    rootNotLast: {
        borderBottom: '1px solid #e5e5e5',
    },
    title: {
        lineHeight: 1.2,
        letterSpacing: -0.2,
        fontSize: 32,
        [theme.breakpoints.down('md')]: {
            letterSpacing: 0.2,
            fontSize: 22,
            lineHeight: 1.4
        },
    },
    link: {
        color: '#222222',
        fontWeight: 400,
        fontFamily: 'Playfair Display',
        textDecoration: 'none',
        '&:hover': {
            opacity: 0.9
        }
    },
    tags: {
        marginTop: 25,
        marginBottom: 30,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    content: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonContainer: {
        marginTop: 25
    },
    button: {
        padding: '8px 16px 7px',
        border: '1px solid #e5e5e5',
        borderRadius: 2,
        textTransform: 'uppercase',
        letterSpacing: 1.3,
        fontSize: 12,
        color: '#777777',
        fontWeight: 600,
        '&:hover': {
            backgroundColor: primaryColor,
            color: '#fff'
        }
    }

}));

const Card = ({ data, index }) => {
    const classes = useStyles();

    return (
        <Box className={clsx(classes.root, index? index !==0? classes.rootNotFirst: classes.rootNotLast: null)}>
            <Box className={classes.content}>
                <Box className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h6">
                        <Link className={classes.link} to={`/${slugify(data.genre)}/${slugify(data.title)}`}>
                            { data.title }
                        </Link>
                    </Typography>
                </Box>
                <Box className={classes.tags}>
                    <Tags data={data} />
                </Box>
                { data.image && <Box className={classes.imageContainer}>
                    <img src={`${process.env.PUBLIC_URL}/images/${data.image}`} alt={data.title} className={classes.image}/>
                </Box> }
                <Box className={classes.content}>
                   <Content blocks={data.content} />
                </Box>
                <Box className={classes.buttonContainer}>
                    <Button className={classes.button}>
                        Continuer la lecture
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Card;