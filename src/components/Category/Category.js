import React,{ useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from './Table';

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
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop:20,
     '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 280,
    },
},
title:{
    marginBottom: 10,
    fontSize: 40,
    fontFamily: "Dancing Script, cursive",
    display: 'flex',
    justifyContent: 'center',
    color: "#ad172b",
},
button:{
    width: 280,
    color: '#ad172b',
    margin: theme.spacing(2),
    padding: "14px",
},
iconButton: {
    marginRight:7,
}
}));

const Category = () => {
const classes = useStyles();
const [show, setShow] = useState([{id: (new Date().getTime())/1000, num: 0}]);

const add = () => {
setShow([...show, {id:(new Date().getTime())/1000, num: show.length }])
};

const [name, setName]= useState('');
const [description, setDescription]= useState('');

return (
    <div className={classes.content}>
            <Toolbar />
                <Typography
                    className={classes.title}
                  >
                    Categorias
                  </Typography>
                  <StyledTextField
                    label="Nombre"
                    name="name"
                    type="text"
                    variant="outlined"
                    onChange={ e => setName(e.target.value)}
                  />
                  <StyledTextField
                    label="Descripcion"
                    name="Description"
                    type="text"
                    variant="outlined"
                    onChange={ e => setDescription(e.target.value)}
                  />
                  <Button
                      className={classes.button}
                      size="large"
                      type="submit"
                      variant="outlined" 
                      color="primary"
                      onClick={() => add()}
                        >
                     <AddIcon className={classes.iconButton}/>  agregar
                   </Button>
        <div>
            {show.map((table, index) => (
                        <Table key={index}/> 
                            
                    ))}
        </div>
    </div>
    )
}

export default Category;