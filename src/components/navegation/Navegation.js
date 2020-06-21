import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShopIcon from '@material-ui/icons/Shop';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#263238',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    ['@media (max-width:700px)']: {
      width: 0,
  },
  },
  drawerPaper: {
    width: drawerWidth,
    ['@media (max-width:700px)']: {
      width: 0,
  },
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nav:{
    flexGrow: 1,
    background: '#263238',
    },
  title: {
    flexGrow: 1,
    fontFamily: "Dancing Script, cursive",
    fontSize: 25,
    ['@media (max-width:700px)']: {
    fontSize: 16,
},
},
  contentShopping: {   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 10px',
},
  icon:{
    color:"white",
},
  dividerShopping: {
    margin: '0px 12px',
    background: 'red',
},
list: {
  width: 250,
},
fullList: {
  width: 'auto',
},
menuButtonIcon:{
  color:"white",
},
divButton:{
  display:"none",
  ['@media (max-width:700px)']: {
    display: "inline",
},
}
}));

export default function Navegation() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <List>
            {['Productos', 'Imagenes'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <ShopIcon /> : <ImageIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[ 'Categorias', 'Configuracion',].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <ShopIcon /> : <SettingsIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText>Cuenta</ListItemText>
              </ListItem>
          </List>
    </div>
  );





  return (
    <div>
        <div className={classes.nav}>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
        <div className={classes.divButton}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.buttonIcon} onClick={toggleDrawer(anchor, true)}><MenuIcon className={classes.menuButtonIcon}/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
          <Typography variant="h6" className={classes.title}>
            Panel administrador
          </Typography>
          <div className={classes.contentShopping}>
                <IconButton  className={classes.icon}>
                    <NotificationsNoneIcon />
                </IconButton>
                <Divider orientation="vertical" flexItem className={classes.dividerShopping}/>
                <div>
                <IconButton  className={classes.icon}>
                    <ExitToAppIcon />
                </IconButton>
                </div>
            </div>
        </Toolbar>
      </AppBar>
      </div>
      <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Productos', 'Imagenes'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <ShopIcon /> : <ImageIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[ 'Categorias', 'Configuracion',].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <ShopIcon /> : <SettingsIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText>Cuenta</ListItemText>
              </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
      </div>
    </div>
  );
}