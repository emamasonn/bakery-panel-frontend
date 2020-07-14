import React,{ useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Switch from '@material-ui/core/Switch';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    contentInfoNoDelivered: {
        borderBottom:"5px solid red",
        width: "100%",
        display: 'flex',
        flexWrap: "wrap",
        '@media (max-width:600px)': {
          flexDirection: "column",
      }
    },

    contentInfoDelivered: {
        borderBottom:"5px solid blue",
        width: "100%",
        display: 'flex',
        flexWrap: "wrap",
        '@media (max-width:600px)': {
          flexDirection: "column",
      }
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
    textfield:{
        margin: theme.spacing(1),
        width: "20%",
        '@media (max-width:600px)': {
          width: "100%",
          margin: theme.spacing(0),
      },
    },
    editInfo:{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        '@media (max-width:600px)': {
          flexDirection: "column",
      }
    },
    checkIcon:{
        color: "green",
    },
    text:{
        margin: theme.spacing(1),
        width: "20%",
        borderBottom: "1px solid #263238",
        '@media (max-width:600px)': {
          width: "100%",
          margin: theme.spacing(0),
      },
  },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
  },
    modalpaper:{
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
  },
    buttonModal:{
        margin: theme.spacing(1),
        width: "20%",
        borderBottom: "1px solid #263238",
        '@media (max-width:600px)': {
        width: "100%",
        margin: theme.spacing(0),
    },

  }
}));

const Order = () => {
    //style
    const classes = useStyles();

    //delivery
    const [delivered, setDelivered] = useState(false);

    const toggleChecked = () => {
      setDelivered((prev) => !prev);
    };
    // style form 
    const contentInfo= delivered ? (classes.contentInfoDelivered) 
                               : (classes.contentInfoNoDelivered);
    //datos form
    const [datos, setDatos] = useState({
    name: '',
    lastName:'',
    phone:'',
    direction:'',
    department:'',
    city:'',
    cellphone:'',
    email:'',
    note:'',
    productList:'',
                                      });
    
    //form delete                                  
    const [del, setDelete] = useState(true);
    //form edit                                 
    const [edit, setEdit] = useState(true);
    
    //form complete

    const handleInputChange = (event) => {
    setDatos({...datos, [event.target.name] : event.target.value})
    };
      
    //Modal

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

    <div > 
    {del ?(   
        <Paper className={classes.root}>
            {edit ? ( 
                <div className={classes.editInfo}> 
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.name}
                        label="Nombre"
                        name="name"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.lastName}
                        label="Apellido"
                        name="lastName"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.phone}
                        label="Telefono"
                        name="phone"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.direction}
                        label="Direccion"
                        name="direction"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.department}
                        label="Departamento"
                        name="department"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.city}
                        label="Ciudad"
                        name="city"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.cellphone}
                        label="Celular"
                        name="cellphone"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.email}
                        label="Email"
                        name="email"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.note}
                        label="Notas"
                        name="note"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.textfield}
                        defaultValue={datos.productList}
                        label="Lista de productos"
                        name="productList"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                </div>) : (
                <div className={contentInfo}>
                    <Typography className={classes.text}>
                        {datos.name}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.lastName}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.phone}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.direction}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.department}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.city}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.cellphone}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.email}
                    </Typography>
                    <Typography className={classes.text}>
                        {datos.note}
                    </Typography>
                    <Button variant="outlined"
                            className={classes.buttonModal}
                            type="button"
                            onClick={handleOpen}>
                        Productos
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.modalpaper}>
                                {datos.productList}
                            </div>
                        </Fade>
                    </Modal>
                </div>
            )}
            
            <div className={classes.contentButton}>
                {delivered ? 'entregado' : 'no entregado'}
                <Switch color="primary" 
                        onChange={toggleChecked} />
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
export default Order;