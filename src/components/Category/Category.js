import React, { useState, useEffect } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Row from  './Row';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {loadCategories, addCategoryAction} from '../../redux/actions/categoriesAction'
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
content: {
    marginTop:20,
},
title:{
    marginBottom: 10,
    fontSize: 40,
    fontFamily: "Dancing Script, cursive",
    display: 'flex',
    justifyContent: 'center',
    color: "black",
},
ui:{
    display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
    color: "#ad172b",
    justifyContent: 'center',
},
button:{
    margin: theme.spacing(1),
    '@media (max-width:600px)': {
        margin: theme.spacing(0),
    },
},
table:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
},
}));

const Category = ({categories, loadCategories, addCategoryAction}) => {
const classes = useStyles();

//get
useEffect(() => {
    axios.get(`http://localhost:3000/category`)
    .then( (resp) => {
      console.log(resp.data.categories)
      let data = resp.data.categories
      loadCategories(data)
    })
    .catch( (error) => {
      console.log(error)
    })
  }, [])

// post
  	const [datos, setDatos] = useState({
      	name: '',
      	description:'',
  	});
  	const handleInputChange = (event) => {
      	setDatos({...datos, [event.target.name] : event.target.value})
    };
    const handleSubmit = event => {
        axios.post(`http://localhost:3000/category`,{
            name: datos.name,
            description: datos.description
          	})
          	.then((response) =>{
              const {name, description} = response.category
              addCategoryAction({name, description})
          	})
          	.catch((error) =>{
            console.log(error)
          	});
        };
return (
    <div  className={classes.content}>
        <Toolbar />
            <Typography className={classes.title}>
                Categorias
            </Typography>
            <form onSubmit={handleSubmit} className={classes.ui}>
                    <TextField
                        label="Nombre"
                        name="name"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
					/>
                    <TextField
                        label="Descripcion"
                        name="description"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
					/> 
                    <Button
    	                className={classes.button}
                        size="large"
                        type="submit"
                        variant="outlined" 
                        color="primary">
                         <AddIcon/>
                    </Button>
            </form>
            <div  className={classes.table}>
                {categories.map((cate, index)=>(
                    <Row  key={index}
                            cate={cate}/>
                ))}
            </div>
    </div>
  	)
}
const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories
})

const mapDispatchToProps = dispatch => ({
  loadCategories: (data) => {
    dispatch(loadCategories(data))
  },
  addCategoryAction: (data)=>{
    dispatch(addCategoryAction(data))
  }
})

export default connect( mapStateToProps, mapDispatchToProps )( Category);
