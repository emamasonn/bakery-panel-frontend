import React,{ useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from './Table';

const StyledTextField = styled(TextField)
    ` .MuiOutlinedInput-root {
    fieldset {
      border-color: rgb(216, 216, 216);
      }
      
    &.Mui-focused fieldset {
      border-color: rgb(216, 216, 216);
      }
       }`;
const useStyles = makeStyles((theme) => ({
content: {
    marginTop:20,
     '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 280,
        '@media (max-width:600px)': {
          width: "90%",
          margin: theme.spacing(1),
      },
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
    color: 'blue',
    margin: theme.spacing(2),
    padding: "14px",
    '@media (max-width:600px)': {
      width: "90%",
      margin: theme.spacing(1),
  },
},
iconButton: {
    marginRight:7,
},

}));

const Category = () => {
const classes = useStyles();
const [show, setShow] = useState([{id: (new Date().getTime())/1000, num: 0}]);

const add = () => {
setShow([...show, {id:(new Date().getTime())/1000, num: show.length }])
};


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
                    
                  />
                  <StyledTextField
                    label="Descripcion"
                    name="Description"
                    type="text"
                    variant="outlined"
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

        {/*<div>
            {show.map((table, index) => (
                        <Table key={index}/> 
                            
                    ))}
            </div>*/}
        
    </div>
    )
}

export default Category;