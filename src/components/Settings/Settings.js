import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Navegation from "../navegation/Navegation";
import AddIcon from "@material-ui/icons/Add";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import Form from "./Form";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
}));

function Settings() {
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
        {show.map((form, index) => (
          <Form key={index} title={index} />
        ))}
        <Box textAlign="center" className={classes.divButton}>
          <Button
            className={classes.button}
            size="large"
            type="submit"
            variant="outlined"
            color="primary"
            onClick={() => add()}
          >
            <AddIcon className={classes.iconButton} /> Abrir nueva tienda
          </Button>
          <Button
            className={classes.button}
            size="large"
            type="submit"
            variant="outlined"
            color="primary"
          >
            <SaveAltIcon className={classes.iconButton} /> Guardar Cambios
          </Button>
        </Box>
      </main>
    </div>
  );
}
export default Settings;
