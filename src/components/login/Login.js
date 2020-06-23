import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from  '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NavegationBar from './NavegationBar'
import logodos from '../../Assets/logodos.png';
import styled from 'styled-components';
import Footer from './Footer';
import { Link } from "react-router-dom";
import Media from 'react-media';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgb(216, 216, 216);}
    &.Mui-focused fieldset {
      border-color: rgb(216, 216, 216);} }`;
const useStyles = makeStyles(theme => ({
root: {
    height: '100%'
},
grid: {
    height: '100%'
},
quote: {
    height: '100%',
    display: 'flex',
    marginTop: '7%',
},
content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
},
title:{
    marginBottom: 10,
    fontSize: 70,
    fontFamily: "Dancing Script, cursive",
    display: 'flex',
    justifyContent: 'center',
    color: "#ad172b",
},
  signInButton:{
    color: "#ad172b",
    width: "95%",
    padding: "10px",
},
textField:{
      width: "95%",
      marginBottom: "16px",
},
  img:{
    width: "90%",
},
text:{
  textDecoration: 'none',
  color: '#263238',
}
}));

function Login(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <NavegationBar/>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          item xs={0} xl={0} sm={4} md={5} lg={5}
        >
          <Media query="(min-width: 600px">
          <div className={classes.quote}>
              <Box mt={4} textAlign="center">
                        <img src={logodos} className={classes.img} alt="logo"/>
                </Box>
          </div>
          </Media>
        </Grid>
        <Grid
          item xs={12} xl={12} sm={8} md={7} lg={7}
        >
        <Box className={classes.content}>
              <form
              >
                <Typography
                  className={classes.title}
                >
                  Ingresa !
                </Typography>
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
                  <Link to="/Settings"className={classes.text}>
                  Ingresar</Link>
                </Button>
              </form>
          </Box>
        </Grid>
        <Footer/>
      </Grid>
    </div>
  );
};
export default Login;