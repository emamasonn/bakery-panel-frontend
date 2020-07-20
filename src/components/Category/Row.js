import React,{ useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';
import {deleteCategoryAction, } from '../../redux/actions/categoriesAction'
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        padding: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: "1px solid #F0F0F0",
        '@media (max-width:600px)': {
            margin: theme.spacing(0.5),
        },
    },
    contentInfo: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignContent: "flex-start",
    },
    contentButton: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        margin: '0.2em',
    },
    deleteIcon:{
        color:"#ad172b",
    },
    editIcon:{
        color:"blue",
    },
    textfieldName:{
        margin: theme.spacing(1),
        width: "20%",
        '@media (max-width:600px)': {
          width: "100%",
          margin: theme.spacing(0),
      },
      },
    textfieldDescription:{
        margin: theme.spacing(1),
        width: "80%",
        '@media (max-width:600px)': {
          width: "100%",
          margin: theme.spacing(0),
    },
    },
    editInfo:{
        display: "flex",
        width: "100%",
        '@media (max-width:600px)': {
          flexDirection: "column",
      },

    },
    checkIcon:{
        color: "green",
    }
}));

const Row = ({cate, deleteCategoryAction}) => {

    const classes = useStyles();

    const {_id, name, description} = cate

    const [datos, setDatos] = useState({
        name: name,
        description: description,
    });
    const [edit, setEdit] = useState(false);

    const handleInputChange = (event) => {

        setDatos({...datos, [event.target.name] : event.target.value})

    };
    //delete
    const handleRemove = (_id) => {
        axios.delete(`http://localhost:3000/category/${_id}`)
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
        deleteCategoryAction(_id)
    };

    return (
    <div> 
        <Paper className={classes.root}>
            {edit ? ( 
                <div className={classes.editInfo}> 
                    <TextField
                        className={classes.textfieldName}
                        defaultValue={datos.name}
                        label="Nombre"
                        name="name"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfieldDescription}
                        defaultValue={datos.description}
                        label="Descripcion"
                        name="description"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    /> 
                </div>) : (
                <div className={classes.contentInfo}>
                    <Typography variant="h6">
                        {datos.name}
                    </Typography>
                    <Typography component="body2">
                        {datos.description}
                    </Typography>
                </div>
            )}
            <div className={classes.contentButton}>
                <Button 
                    variant="outlined"
                    className={classes.button}
                    onClick={() => {handleRemove(_id)}}> 
                    <DeleteOutlinedIcon className={classes.deleteIcon}/> 
                </Button>
                <Button 
                    variant="outlined"
                    className={classes.button}
                    onClick={() => {
                    setEdit(!edit);
                    }}> 
                    {edit ? (<CheckIcon className={classes.checkIcon}/>) 
                            :
                            (<CreateIcon className={classes.editIcon}/>)} 
                </Button>
            </div>
        </Paper>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteCategoryAction: (id) => {
      dispatch(deleteCategoryAction(id))
    },
  })
  
export default connect(null, mapDispatchToProps )( Row);
