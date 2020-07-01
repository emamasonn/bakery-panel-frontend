import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(1),
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 280,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 280,
    },
  },
  listRoot: {
    width: "100%",
    maxWidth: 1050,
    backgroundColor: theme.palette.background.paper,
  },
  listPaper: {
    display: "flex",
    backgroundColor: "#F4F6F8",
  },
}));

function Product(props) {
  const classes = useStyles();

  const [button, setButton] = useState(true);

  return (
    <React.Fragment className={classes.content}>
      {button ? (
        <Paper className={classes.listPaper}>
          <List dense className={classes.listRoot}>
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
          </List>
        </Paper>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}
export default Product;
