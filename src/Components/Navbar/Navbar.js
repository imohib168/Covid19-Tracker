import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    bgc: {
        backgroundColor: '#7a0707'
    }
}));

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bgc}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Covid19 Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Navbar;
