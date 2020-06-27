import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navegation from "../navegation/Navegation";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import FotoPerfil from "../../assets/avatar.jpg";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgb(216, 216, 216);
    }

    &.Mui-focused fieldset {
      border-color: rgb(216, 216, 216);
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#F4F6F8",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 280,
    },
    marginTop: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 40,
    fontFamily: "Dancing Script, cursive",
    display: "flex",
    justifyContent: "center",
    color: "#ad172b",
  },
  button: {
    padding: "10px",
    marginTop: "50px",
    marginBottom: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    padding: "30px",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
  },
  Fab: {
    margin: "30px",
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  profileArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Account(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navegation />
      <div className={classes.content}>
        <Toolbar />
        <Typography className={classes.title}>
          Mi Cuenta {props.title}
        </Typography>
        <Grid container direction="row" spacing={4}>
          <Grid item md={5} spacing={4}>
            <Paper elevation={3} className={classes.profile}>
              <div>
                <Typography variant="h4">Cosme Fulanito</Typography>
                <Divider></Divider>
                <Fab
                  color="primary"
                  aria-label="editar"
                  className={classes.Fab}
                >
                  <EditIcon />
                </Fab>
              </div>

              <Avatar
                alt="Foto de perfil"
                src={FotoPerfil}
                className={classes.large}
              />
            </Paper>
          </Grid>
          <Grid item md={7}>
            <Paper elevation={3}>
              <form className={classes.form}>
                <Grid container spacing={2} justify="center">
                  <Grid item md={6} xs={12}>
                    <StyledTextField
                      className={classes.textField}
                      label="Nombre"
                      name="nombre"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <StyledTextField
                      className={classes.textField}
                      label="Apellido"
                      name="apellido"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <StyledTextField
                      className={classes.textField}
                      label="Email"
                      name="email"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <StyledTextField
                      className={classes.textField}
                      label="Celular"
                      name="telefono"
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Button
                  className={classes.button}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick="submit"
                >
                  Guardar
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Account;
