import React, { useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from  '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const StyledTextField = styled(TextField)`
    .MuiOutlinedInput-root {
    fieldset {
      border-color: rgb(216, 216, 216);
      }
      
    &.Mui-focused fieldset {
      border-color: rgb(216, 216, 216);
      }
       }`;
const useStyles = makeStyles((theme) => ({
  content: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 280,
  },
},
    button:{
        color: '#ad172b',
        padding: "10px",
        margin: theme.spacing(1),
  },
    iconButton: {
        marginRight:7,
}
}));         

function Form(props){
const classes = useStyles();

const [button, setButton] = useState(true);

return (
        <div>
          {button ? (
            <Grid>  
                <Typography
                        className={classes.title}
                      >
                        {props.title}
                      </Typography>
                  <div className={classes.content}>
                  <StyledTextField
                    label="Facebook"
                    name="facebook"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField             
                    label="Instagram"
                    name="instagram"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField               
                    label="Link de tienda"
                    name="tienda"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField                
                    label="Nombre de la panaderia"
                    name="nombre de la panaderia"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField             
                    label="Direccion en coordenadas"
                    name="coordenadas"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField              
                    label="Direccion Oficial"
                    name="direccion oficial"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField             
                    label="Dias"
                    name="dias"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField            
                    label="Horario"
                    name="horario"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField      
                    label="Telefono"
                    name="telefono"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField         
                    label="Celular"
                    name="telefono"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField              
                    label="Email"
                    name="email"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField                
                    label="Notas"
                    name="notas"
                    type="text"
                    variant="outlined"
                  />
                <Box>
                  <Button
                      className={classes.button}
                      size="large"
                      type="submit"
                      variant="outlined" 
                      color="primary"
                      onClick={() => {
                        setButton(!button);
                      }}
                    >
                     <DeleteIcon className={classes.iconButton}/> Eliminar
                  </Button>
                </Box>
            </div>
            </Grid>
        ) : (
      <div></div>
      )}
    </div>
  )
}
export default Form;