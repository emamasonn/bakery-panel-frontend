import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Navegation from "../Navegation/Navegation";
import Product from "./Product";
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
  },
  content: {
    display: "flex",
    flexDirection: "column",
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
    backgroundColor: "#F4F6F8",
  },
}));

function Products() {
  const classes = useStyles();
  const [show, setShow] = useState([
    { id: new Date().getTime() / 1000, num: 0 },
  ]);

  const add = () => {
    setShow([...show, { id: new Date().getTime() / 1000, num: show.length }]);
  };

  return (
    <div className={classes.root}>
      <Navegation />
      <main className={classes.content}>
        <Toolbar />
        <Typography className={classes.title}>Productos</Typography>
        <div className={classes.topControls}>
          <Paper component="form" className={classes.paperRoot}>
            <InputBase
              className={classes.inputSearch}
              placeholder="Buscar un producto"
              inputProps={{ "aria-label": "Buscar un producto" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Fab
            color="primary"
            onClick={() => add()}
            aria-label="add"
            className={classes.addButton}
          >
            <AddIcon />
          </Fab>
        </div>
        {show.map(() => (
          <Product />
        ))}
      </main>
    </div>
  );
}
export default Products;
