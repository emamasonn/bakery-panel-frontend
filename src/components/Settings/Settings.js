import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import Form from "./Form";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
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
    <div className={classes.content}>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <Toolbar />
        <Typography className={classes.title}>Tienda</Typography>
        {show.map((form, index) => (
          <Form key={index} title={index} />
        ))}
        {
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
        }
      </Grid>
    </div>
  );
}
export default Settings;
