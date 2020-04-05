import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { books } from "../../utils/data/books";
import { getRandomArrayEveryDay } from "../../utils/utils";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    },
    img: {
        width: '100%',
        [theme.breakpoints.down("md")]: {
            width: '70%'
        },
    }
}));

const Book = () => {
    const classes = useStyles();

    return (
            <Box className={classes.root}>
                <Box display="flex" justifyContent="center">
                    <img src={`${process.env.PUBLIC_URL}/images/books/${getRandomArrayEveryDay(books)}`} alt="livre" className={classes.img}/>
                </Box>
            </Box>
    );
};

export default Book;
