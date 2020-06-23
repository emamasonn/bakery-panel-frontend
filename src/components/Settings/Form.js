import React, { useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

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
    title:{
        marginBottom: 10,
        fontSize: 40,
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        color: "#ad172b",
    },
    button:{
        color: '#ad172b',
        padding: "10px",
        marginLeft:15,
        marginTop:10,
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
                    <div> <Typography
                    className={classes.title}
                  >
                    Tienda {props.title}
                  </Typography>
                  <StyledTextField
                    className={classes.textField}
                    label="Facebook"
                    name="facebook"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Instagram"
                    name="instagram"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Link de tienda"
                    name="tienda"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Nombre de la panaderia"
                    name="nombre de la panaderia"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Direccion en coordenadas"
                    name="coordenadas"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Direccion Oficial"
                    name="direccion oficial"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Dias"
                    name="dias"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Horario"
                    name="horario"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Telefono"
                    name="telefono"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Celular"
                    name="telefono"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
                    label="Email"
                    name="email"
                    type="text"
                    variant="outlined"
                  />
                  <StyledTextField
                    className={classes.textField}
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
        ) : (
      <div></div>
      )}
    </div>
  )
}
export default Form;