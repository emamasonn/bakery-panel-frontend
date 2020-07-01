import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ShopIcon from "@material-ui/icons/Shop";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ImageIcon from "@material-ui/icons/Image";
import CategoryIcon from "@material-ui/icons/Category";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  listItem: {
    margin: 10,
  },
  text: {
    textDecoration: "none",
    color: "#263238",
  },
}));

const ListLink = () => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <Toolbar />
      <List>
        <Link to="/Products" className={classes.text}>
          <ListItem button key="Products" className={classes.listItem}>
            <ListItemIcon>
              <ShopIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">Productos</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/Images" className={classes.text}>
          <ListItem button key="Images" className={classes.listItem}>
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">Imagenes</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/Category" className={classes.text}>
          <ListItem button key="Category" className={classes.listItem}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">Categorias</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/Settings" className={classes.text}>
          <ListItem button key="Settings" className={classes.listItem}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">Configuracion</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/Count" className={classes.text}>
          <ListItem button key="Count" className={classes.listItem}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">Cuenta</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  );
};
export default ListLink;
