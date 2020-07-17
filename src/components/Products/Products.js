import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Product from "./Product";
import TableProducts from "./TableProducts";
import TableProducts2 from "./TableProducts2";
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
  const [newProduct, setNewProduct] = useState({});
  const [show, setShow] = useState([
    { id: new Date().getTime() / 1000, num: 0 },
  ]);

  const createNewProduct = (productDetails) => {
    setNewProduct(productDetails);
  };

  const add = () => {
    setShow([...show, { id: new Date().getTime() / 1000, num: show.length }]);
  };

  // En el useEffect (componentDidMount) pegarle a la api con una funcion async await
  // y usas mapDIspatchToProps para dispachar una action de Redux y guardar la
  // data en el store. Luego usas mapStateToProps y te traes la data del store y la
  // pasas al componente TableProducts.

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
          <Product key={index} createProduct={createNewProduct} />
        ))}
      </div>
      {/* <div className={classes.table}>
        <TableProducts newProduct={newProduct} />
      </div> */}
      <div className={classes.table}>
        <TableProducts2 newProduct={newProduct} />
      </div>
    </div>
  );
}
export default Products;
