import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Title from "./title";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(3),
        }
    },
}));

const Block = ({ title, children }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Title text={title} />
            </Box>
            <Box className={classes.title}>
                { children }
            </Box>   
        </Box>
    );
};

export default Block;
