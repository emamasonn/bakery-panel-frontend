import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid,Button,TextField,Typography,Box} from '@material-ui/core';
import NavegationBar from './NavegationBar'
import logodos from '../../assets/logodos.png';
import styled from 'styled-components';
import Footer from './Footer';

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
    ['@media (max-width:1055px)']: {
      marginTop:"90px"}, 
},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    ['@media (max-width:771px)']: {
      marginTop: 80,
  },
    ['@media (max-width:600px)']: {
        marginTop: 50,
    },
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
    ['@media (max-width:840px)']: {
      width:"60%"},
      ['@media (max-width:600px)']: {
      width:"95%"},
  },
  textField:{
      width: "95%",
      padding: "10px",
      marginBottom: "16px",
      ['@media (max-width:840px)']: {
        width:"60%"},
        ['@media (max-width:600px)']: {
          width:"95%"},
  },
  img:{
    width: "90%",
    ['@media (max-width:600px)']: {
        width: 0,
    },
  },
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
          <div className={classes.quote}>
                <Box mt={4} textAlign="center">
                        <img src={logodos} className={classes.img} alt="logo"/>
                </Box>
            </div>
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
                  Ingresar
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