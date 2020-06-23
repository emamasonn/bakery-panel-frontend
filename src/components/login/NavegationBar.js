import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
root: {
    background: '#263238',
    color: '#fff',
    flexDirection: 'initial',
    alignItems: 'center',
    padding: '0 40px',
},
typography:{
        margin: 10,
        fontSize: 25,
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
},
}));
const NavegationBar = () => {
const classes = useStyles();
    return(
        <AppBar position="fixed" className={classes.root} id="appbar-navegation">
            <Typography className={classes.typography}>Panel Administrador</Typography>
        </AppBar>
    )
}
export default NavegationBar
