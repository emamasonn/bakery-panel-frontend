import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Product from "./Product";
import TableProducts from "./TableProducts";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 20,
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
    "@media (max-width:600px)": {
      margin: theme.spacing(0.5),
    },
  },
  listPaper: {
    backgroundColor: "#F4F6F8",
  },
  product: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  table: {
    marginTop: theme.spacing(10),
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
    <div className={classes.content}>
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
        <Button
          className={classes.addButton}
          size="large"
          type="submit"
          variant="outlined"
          color="primary"
          onClick={() => add()}
        >
          {" "}
          <AddIcon />
        </Button>
      </div>
      <div className={classes.product}>
        {show.map((form, index) => (
          <Product key={index} />
        ))}
      </div>
      <div className={classes.table}>
        <TableProducts />
      </div>
    </div>
  );
}
export default Products;
