import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: "#222222",
          fontSize: 11
        }
    },
}));

const Search = () => {
    const classes = useStyles();
    return (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField 
                InputProps={{
                    classes: {
                        input: classes.input
                    }
                }}
                placeholder="Recherchez et tapez entrer" />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </form>                       
    );
}

export default Search;