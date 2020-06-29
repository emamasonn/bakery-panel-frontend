import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Hidden from '@material-ui/core/Hidden';
import DrawerMobile from './DrawerMobile';

const useStyles = makeStyles((theme) => ({
appBar: {
    background: '#263238',
    zIndex: theme.zIndex.drawer + 1,
},
title: {
    flexGrow: 1,
    fontFamily: "Dancing Script, cursive",
    fontSize: 25,
    '@media (max-width:600px)': {
    fontSize: 16,
    }
},
contentNav: {   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 10px',
},
icon:{
    color:"white",
},
divider: {
    margin: '0px 12px',
    background: 'red',
},
}));

export default function Navegation() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar
            position="fixed"
            className={classes.appBar}
            >
            <Toolbar>
        <Hidden mdUp>
            <DrawerMobile/>
        </Hidden>
            <Typography className={classes.title}>
                    Panel administrador
            </Typography>
            <div className={classes.contentNav}>
                <IconButton className={classes.icon}>
                    <NotificationsNoneIcon />
                </IconButton>
            <Divider orientation="vertical" 
                     flexItem 
                     className={classes.divider}/>
                <IconButton  className={classes.icon}>
                    <ExitToAppIcon />
                </IconButton>
            </div>
            </Toolbar>
      </AppBar>
    </div>
  );
}