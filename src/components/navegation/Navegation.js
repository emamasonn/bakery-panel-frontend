import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShopIcon from "@material-ui/icons/Shop";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import CategoryIcon from "@material-ui/icons/Category";
import ListLink from "./ListLink";
import Media from "react-media";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "#263238",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  nav: {
    flexGrow: 1,
    background: "#263238",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Dancing Script, cursive",
    fontSize: 25,
    "@media (max-width:600px)": {
      fontSize: 16,
    },
  },
  contentShopping: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px",
  },
  icon: {
    color: "white",
  },
  divider: {
    margin: "0px 12px",
    background: "red",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButtonIcon: {
    color: "white",
  },
}));

export default function Navegation() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListLink
        link="/Products"
        key="Products"
        text="Productos"
        icon={<ShopIcon />}
      />
      <Divider />
      <ListLink
        link="/Images"
        key="Images"
        text="Imagenes"
        icon={<ImageIcon />}
      />
      <Divider />
      <ListLink
        link="/Category"
        key="Category"
        text="Categorias"
        icon={<CategoryIcon />}
      />
      <Divider />
      <ListLink
        link="/Settings"
        key="Settings"
        text="Configuracion"
        icon={<SettingsIcon />}
      />
      <Divider />
      <ListLink
        link="/Count"
        key="Count"
        text="Cuenta"
        icon={<AccountCircleIcon />}
      />
      <Divider />
    </div>
  );
  return (
    <div>
      <div className={classes.nav}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Media query="(max-width: 700px">
              <div className={classes.divButton}>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      className={classes.buttonIcon}
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <MenuIcon className={classes.menuButtonIcon} />
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </Media>
            <Typography variant="h6" className={classes.title}>
              Panel administrador
            </Typography>
            <div className={classes.contentShopping}>
              <IconButton className={classes.icon}>
                <NotificationsNoneIcon />
              </IconButton>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
              <div>
                <IconButton className={classes.icon}>
                  <ExitToAppIcon />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.root}>
        <Media query="(min-width: 700px">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <ListLink
                link="/Products"
                key="Products"
                text="Productos"
                icon={<ShopIcon />}
              />
              <Divider />
              <ListLink
                link="/Images"
                key="Images"
                text="Imagenes"
                icon={<ImageIcon />}
              />
              <Divider />
              <ListLink
                link="/Category"
                key="Category"
                text="Categorias"
                icon={<CategoryIcon />}
              />
              <Divider />
              <ListLink
                link="/Settings"
                key="Settings"
                text="Configuracion"
                icon={<SettingsIcon />}
              />
              <Divider />
              <ListLink
                link="/Count"
                key="Count"
                text="Cuenta"
                icon={<AccountCircleIcon />}
              />
              <Divider />
            </div>
          </Drawer>
        </Media>
      </div>
    </div>
  );
}
