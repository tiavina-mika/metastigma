import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { citations } from '../../utils/data/citations';
import { getRandomArrayEveryDay } from '../../utils/utils';

const fonts = ['Bell MT', 'Palatino', 'Franklin Gothic'];

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        }
    },
    leftQuote: {
        transform: 'rotate(180deg)'
    },
    quote: {
        fontSize: 60
    },
    text: {
        fontFamily: getRandomArrayEveryDay(fonts),
        fontSize: 24,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: 20,
        }
    },
    author: {
        marginLeft: 5,
        marginRight: 5,
        [theme.breakpoints.down('md')]: {
            fontSize: 14
        }
    },
    line: {
        height: 1,
        backgroundColor:'#000',
        width: 20
    },
    book: {
        fontStyle: 'italic'
    }
}));

const Citation = () => {
    const classes = useStyles();
    const citation = getRandomArrayEveryDay(citations);

    return (
        <Box className={classes.root}>
            <Box display="flex" justifyContent="flex-start">
                <FormatQuoteIcon className={clsx(classes.leftQuote, classes.quote)}/>
            </Box>
            <Box display="flex" justifyContent="center">
                <Typography className={classes.text}>
                    { citation.text}
                </Typography>               
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <FormatQuoteIcon className={classes.quote}/>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box className={classes.line}></Box>
                <Box display="flex" alignItems="center">
                    <Typography className={classes.author}>
                        { citation.author }{ citation.author? `,`: '' }
                    </Typography>                   
                    {citation.book && <Typography className={clsx(classes.author, classes.book)}>
                        {citation.book}
                    </Typography>  }                 
                </Box>
                <Box className={classes.line}></Box>
            </Box>
        </Box>
    );
}

export default Citation;