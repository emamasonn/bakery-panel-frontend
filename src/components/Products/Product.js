import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Navegation from "../Navegation/Navegation";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(1),
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 280,
    },
    marginTop: 20,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 280,
    },
    marginTop: 20,
  },
  divButton: {
    margin: theme.spacing(1),
  },
  button: {
    color: "#ad172b",
    margin: "10px",
    padding: "10px",
  },
  iconButton: {
    marginRight: 7,
  },
  title: {
    marginBottom: 10,
    fontSize: 40,
    fontFamily: "Dancing Script, cursive",
    display: "flex",
    justifyContent: "center",
    color: "#ad172b",
  },
  listRoot: {
    width: "100%",
    maxWidth: 1050,
    backgroundColor: theme.palette.background.paper,
  },
  paperRoot: {
    display: "flex",
    justifyContent: "space-around",
    width: 280,
    backgroundColor: "#F4F6F8",
  },
  inputSearch: {
    marginLeft: theme.spacing(1),
  },
  topControls: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  addButton: {
    marginRight: 50,
  },
  listPaper: {
    display: "flex",
    backgroundColor: "#F4F6F8",
  },
}));

function Product() {
  const classes = useStyles();

  const [button, setButton] = useState(true);

  return (
    <React.Fragment className={classes.content}>
      {button ? (
        <Paper className={classes.listPaper}>
          <List dense className={classes.listRoot}>
            return (
            <ListItem>
              <IconButton
                aria-label="editar"
                color="primary"
                className={classes.margin}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="eliminar"
                color="secondary"
                className={classes.margin}
                type="submit"
                onClick={() => {
                  setButton(!button);
                }}
              >
                <DeleteIcon />
              </IconButton>
              <ListItemAvatar>
                <Avatar alt={"Fotito del producto"} />
              </ListItemAvatar>
              <TextField
                id="standard-read-only-input"
                placeholder="Nombre de tu producto"
                InputProps={{
                  readOnly: true,
                }}
              />
              <Input
                id="standard-adornment-amount"
                type="number"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
              <TextField
                id="standard-read-only-input"
                placeholder="Categoría de tu producto"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="standard-read-only-input"
                multiline
                placeholder="Descripción de tu producto"
              />
              <Input type="file"></Input>
            </ListItem>
            );
          </List>
        </Paper>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}
export default Product;
