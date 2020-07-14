import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import FotoPerfil from "../../assets/avatar.jpg";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  paperArea: {
    padding: 50,
    marginRight: 30,
    marginLeft: 30,
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
  profileBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  nameAccount: {
    margin: 10,
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  buttonsBox: {
    marginTop: 20,
    marginBottom: 40,
  },
  Fab: {
    margin: 14,
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
      <div className={classes.content}>
        <Toolbar />
        <Typography className={classes.title}>
          Mi Cuenta {props.title}
        </Typography>

        <Paper elevation={3} className={classes.paperArea}>
          <Grid container direction="row">
            <Grid
              container
              md={6}
              spacing={4}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Avatar
                alt="Foto de perfil"
                src={FotoPerfil}
                className={classes.large}
              />
              <Typography variant="h4" className={classes.nameAccount}>
                Cosme Fulanito
              </Typography>
              <div className={classes.buttonsBox}>
                <Fab
                  color="primary"
                  aria-label="editar"
                  className={classes.Fab}
                >
                  <EditIcon />
                </Fab>
                <Fab
                  color="primary"
                  aria-label="editar"
                  className={classes.Fab}
                >
                  <DoneOutlineIcon />
                </Fab>
              </div>
            </Grid>
            <Grid item md={6}>
              <form className={classes.form}>
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  {/* <Grid
                    item
                    md={5}
                    s={12}
                    xs={12}
                    justify="center"
                    alignItems="center"
                  > */}
                  <StyledTextField
                    className={classes.textField}
                    label="Nombre"
                    name="nombre"
                    type="text"
                    variant="outlined"
                  />
                  {/* </Grid> */}
                  {/* <Grid item md={5} s={12} xs={12}> */}
                  <StyledTextField
                    className={classes.textField}
                    label="Apellido"
                    name="apellido"
                    type="text"
                    variant="outlined"
                  />
                  {/* </Grid> */}

                  {/* <Grid item md={5} s={12} xs={12}> */}
                  <StyledTextField
                    className={classes.textField}
                    label="Email"
                    name="email"
                    type="text"
                    variant="outlined"
                  />
                  {/* </Grid> */}
                  {/* <Grid item md={5} s={12} xs={12}> */}
                  <StyledTextField
                    className={classes.textField}
                    label="Celular"
                    name="telefono"
                    type="number"
                    variant="outlined"
                  />
                  {/* </Grid> */}
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
export default Account;
