import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  title: {
    marginBottom: 10,
    fontSize: 70,
    fontFamily: "Dancing Script, cursive",
    display: "flex",
    justifyContent: "center",
    color: "#ad172b",
  },
  signInButton: {
    color: "#ad172b",
    width: "80%",
    padding: "10px",
  },
  textField: {
    width: "80%",
    marginBottom: "16px",
  },
  text: {
    textDecoration: "none",
    color: "#263238",
  },
  div: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:600px)": {
      marginTop: 100,
      width: 350,
      height: 350,
    },
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Box textAlign="center" className={classes.div}>
          <form>
            <Typography className={classes.title}>Ingresa!</Typography>
            <StyledTextField
              className={classes.textField}
              fullWidth
              label="Email"
              name="email"
              type="text"
              variant="outlined"
            />
            <StyledTextField
              className={classes.textField}
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
            />
            <Button
              className={classes.signInButton}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              <Link to="/Settings" className={classes.text}>
                Ingresar
              </Link>
            </Button>
          </form>
        </Box>
      </Grid>
    </div>
  );
}
export default Login;
