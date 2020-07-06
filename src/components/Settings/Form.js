import React, { useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from  '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
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
},
  title:{
      marginBottom: 10,
      fontSize: 40,
      fontFamily: "Dancing Script, cursive",
      display: 'flex',
      justifyContent: 'center',
      color: "#ad172b",
},
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
                        Tienda
                      </Typography>
                  <div className={classes.content}>
                          <TextField  
                            label="Facebook"
                            name="facebook"
                            type="text"
                            variant="outlined"
                          />
                          <TextField                 
                            label="Instagram"
                            name="instagram"
                            type="text"
                            variant="outlined"
                          />
                          <TextField               
                            label="Link de tienda"
                            name="tienda"
                            type="text"
                            variant="outlined"
                          />
                          <TextField      
                            label="Nombre de la panaderia"
                            name="nombre de la panaderia"
                            type="text"
                            variant="outlined"
                          />
                          <TextField        
                            label="Direccion en coordenadas"
                            name="coordenadas"
                            type="text"
                            variant="outlined"
                          />
                          <TextField            
                            label="Direccion Oficial"
                            name="direccion oficial"
                            type="text"
                            variant="outlined"
                          />
                          <TextField        
                            label="Dias"
                            name="dias"
                            type="text"
                            variant="outlined"
                          />
                          <TextField 
                            label="Horario"
                            name="horario"
                            type="text"
                            variant="outlined"
                          />
                          <TextField 
                            label="Telefono"
                            name="telefono"
                            type="text"
                            variant="outlined"
                          />
                          <TextField 
                            label="Celular"
                            name="telefono"
                            type="text"
                            variant="outlined"
                          />
                          <TextField  
                            label="Email"
                            name="email"
                            type="text"
                            variant="outlined"
                          />
                          <TextField    
                            label="Notas"
                            name="notas"
                            type="text"
                            variant="outlined"
                          />
                    </div>
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
            </Grid>
        ) : (
      <div></div>
      )}
    </div>
  )
}
export default Form;