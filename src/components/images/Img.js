import React,{ useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';

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

const Img = () => {
    const classes = useStyles();
    const [datos, setDatos] = useState({
                                        name: '',
                                        description:'',
                                      });

    const [del, setDelete] = useState(true);

    const [edit, setEdit] = useState(true);

    const handleInputChange = (event) => {
    setDatos({...datos, [event.target.name] : event.target.value})
    };
      
    return (

    <div> 
    {del ?(   
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
                    onClick={() => {
                        setDelete(!del);
                      }} 
                > 
                    <DeleteOutlinedIcon className={classes.deleteIcon}/> 
                </Button>
                <Button 
                    variant="outlined"
                    className={classes.button}
                    onClick={() => {
                    setEdit(!edit);
                    }}
                > 
                    {edit ? (<CheckIcon className={classes.checkIcon}/>) 
                            :
                            (<CreateIcon className={classes.editIcon}/>)} 
                </Button>
            </div>
        </Paper>
    ) : 
    (<div></div>)} 
    </div>
    )
}
export default Img;