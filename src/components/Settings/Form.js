import React, { useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from  '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 280,
  },
},
  button:{
      padding: "10px",
      margin: theme.spacing(1),
  },
  iconButton: {
      color:"red"
},
  iconSave:{
      color:"green",
      marginRight: 4,
  },
  title:{
      marginBottom: 10,
      fontSize: 40,
      fontFamily: "Dancing Script, cursive",
      display: 'flex',
      justifyContent: 'center',
},
  text:{
      width:280,
      margin: theme.spacing(1),
      background: '#263238',
      color:"white",
      padding:10,
      borderRadius: "10px",
},
  editIcon:{
      color:"blue",
},
  checkIcon:{
      color: "green",
},

}));         

function Form(){
const classes = useStyles();
const [datos, setDatos] = useState({
  panaderia:'',
  facebook: '',
  instagram:'',
  link:'',
  coordenadas:'',
  direccion:'',
  dias:'',
  horario:'',
  telefono:'',
  celular:'',
  email:'',
  notas:'',
});

const [del, setDelete] = useState(true);

const [edit, setEdit] = useState(true);

const handleInputChange = (event) => {
setDatos({...datos, [event.target.name] : event.target.value})
};

return (
        <div>
          {del ? (
            <Grid>  
                <Typography className={classes.title}>
                    {datos.panaderia}
                </Typography>
                    {edit ? 
                    (
                        <div className={classes.content}>
                            <TextField
                              defaultValue={datos.panaderia}      
                              label="Nombre de la panaderia"
                              name="panaderia"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField 
                              defaultValue={datos.facebook}  
                              label="Facebook"
                              name="facebook"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.instagram}                  
                              label="Instagram"
                              name="instagram"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.tienda}              
                              label="Link de tienda"
                              name="link"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.coordenadas}          
                              label="Direccion en coordenadas"
                              name="coordenadas"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.direccion}            
                              label="Direccion Oficial"
                              name="direccion"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.dias}         
                              label="Dias"
                              name="dias"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.horario} 
                              label="Horario"
                              name="horario"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.telefono} 
                              label="Telefono"
                              name="telefono"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.celular} 
                              label="Celular"
                              name="celular"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.email}   
                              label="Email"
                              name="email"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                            <TextField
                              defaultValue={datos.notas}    
                              label="Notas"
                              name="notas"
                              type="text"
                              variant="outlined"
                              onChange={handleInputChange}
                            />
                        </div>    
                    ) 
                    : 
                    (
                        <div className={classes.content}>
                            <Typography className={classes.text}>
                                Panaderia: {datos.panaderia}
                            </Typography>
                            <Typography className={classes.text}>
                                Facebook: {datos.facebook}
                            </Typography>
                            <Typography className={classes.text}>
                                Instagram: {datos.instagram}
                            </Typography>
                            <Typography className={classes.text}>
                                Link: {datos.link}
                            </Typography>
                            <Typography className={classes.text}>
                                Coordenadas: {datos.coordenadas}
                            </Typography>
                            <Typography className={classes.text}>
                                Direccion: {datos.direccion}
                            </Typography>
                            <Typography className={classes.text}>
                                Dias: {datos.dias}
                            </Typography>
                            <Typography className={classes.text}>
                                Horario: {datos.horario}
                            </Typography>
                            <Typography className={classes.text}>
                                Telefono: {datos.telefono}
                            </Typography>
                            <Typography className={classes.text}>
                                Celular: {datos.celular}
                            </Typography>
                            <Typography className={classes.text}>
                                Email: {datos.email}
                            </Typography>
                            <Typography className={classes.text}>
                                Notas: {datos.notas}
                            </Typography>
                        </div>
                    )}
                    <Box textAlign="right">
                        <Button
                            className={classes.button}
                            size="large"
                            type="submit"
                            variant="outlined"
                            onClick={()=>{
                              setEdit(!edit)
                            }}
                            >
                            {edit ? (<CheckIcon className={classes.checkIcon}/>) 
                                  :
                                    (<CreateIcon className={classes.editIcon}/>)} 
                        </Button>
                        <Button
                            className={classes.button}
                            size="large"
                            type="submit"
                            variant="outlined"
                            onClick={() => {
                              setDelete(!del);
                            }}
                          >
                          <DeleteIcon className={classes.iconButton}/>
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