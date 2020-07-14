import React,{ useState } from "react";
import { makeStyles} from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import SearchIcon from '@material-ui/icons/Search';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
boxContent:{
    background:"#f0f0f0",
    boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",
    padding: 5,
    width: "20%",
    textAlign:"center",
    margin:10,
    borderRadius:10,
    '& .MuiTextField-root': {
        margin: theme.spacing(0.3),
    },
    '@media (max-width:600px)': {
        width:"40%",
        margin:5,
        boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.75)",
    },
},
boxEdit:{
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",
},
input:{ 
    display: "none" 
},
buttonDetail: {
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 12,
    borderRadius: '100%',
    background: '#eeeeee',
    minWidth: 'unset',
    height: 40,
    width: 40,
    '&:hover':{
      color: '#ad172b',
      background: '#fafafa',
    }
},
buttonEdit: {
    position: 'absolute',
    top: 125,
    right: 5,
    fontSize: 12,
    borderRadius: '100%',
    background: '#eeeeee',
    minWidth: 'unset',
    height: 40,
    width: 40,
    '&:hover':{
      color: 'blue',
      background: '#fafafa',
    },
     '@media (max-width:600px)': {
        right: "68%",
    },
},
textCard:{
    position: 'absolute',
    top: 135,
    right: 50,
    fontSize: 18,
    color:'white'
},
imgProduct:{
    height: 170,
},
imgProductModal:{
    width:"50%",
    height:300,
    borderRadius:10,
    '@media (max-width:600px)': {
        width: "100%",
    },
},
textCheck:{
    background:"#3f51b5",
    padding:4,
    borderRadius:18,
    color:"white",
    width: "50%",
    fontSize: 15,
    boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.75)",
    '@media (max-width:600px)': {
        width: "80%",
    },
},
modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
paper: {
    backgroundColor: theme.palette.background.paper,
    width:"60%",
    borderRardius:10,
    display:"flex",
    flexGrow:"grow",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '@media (max-width:600px)': {
        flexDirection:"column",
        width:"90%",
    },
},
modalText:{
    marginLeft:30,
    flexDirection:"column",
    '@media (max-width:600px)': {
        marginLeft:0,
        textAlign:"center",
    },
}
}))
const CardImage = ({id, handleRemove}) => {
    const classes = useStyles()
    const [datos, setDatos] = useState({
        name: '',
        description:'',
      });
    const [image, setImage] = useState({ image: null})
    const [show, setShow] = useState(false)
    const [check, setCheck] = useState(false)

    const onImageChange = event => {
      setShow(true)
      if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({image: URL.createObjectURL(img)})}}
      const save = () =>{
          setCheck(!check)
      }
      const handleInputChange = (event) => {
        setDatos({...datos, [event.target.name] : event.target.value})
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
<Box className={classes.boxContent}>
    {check ?
        (<Card >
            <CardActionArea>
                <CardMedia
                    className={classes.imgProduct}
                    component="img"
                    alt="Image product"
                    title="Image Product"
                    image={image.image}/>
                <Typography className={classes.textCard}>
                    {datos.name}
                </Typography>
                <Button className={classes.buttonDetail}
                    onClick={handleOpen}>
                    <SearchIcon />
                </Button>
                <Button className={classes.buttonEdit} 
                        onClick={() => save()}>
                    <CreateIcon fontSize="small"/>
                </Button>
            </CardActionArea>
        </Card>
        ) 
        : 
        (<Box className={classes.boxEdit}>
            {show ?(<Box align='center'><Typography variant="body2" className={classes.textCheck}>Imagen lista!</Typography></Box>)
                  :(<label htmlFor="upload-photo">
                        <input className={classes.input}
                               id="upload-photo"
                                name="upload-photo"
                                type="file"
                                onChange={onImageChange}/>
                            <Fab color="primary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended" >
                                <AddIcon /> foto
                            </Fab>
                    </label>)
            }
                <TextField onChange={handleInputChange}
                    defaultValue={datos.name}  
                    size="small"
                    label="Nombre"
                    name="name"
                    type="text"
                    variant="outlined"/>
                <TextField  onChange={handleInputChange}
                    defaultValue={datos.description}  
                    size="small"
                    label="Descripcion"
                    name="description"
                    type="text"
                    multiline
                    rows={2}
                    variant="outlined"/>
            <Box align='center'>
                <ButtonGroup size="small" 
                             aria-label="small outlined button group">      
                    <Button size="small" 
                            onClick={() => {handleRemove(id);}}>
                        <DeleteIcon fontSize="small"/>
                    </Button>
                    <Button size="small" 
                            onClick={() => save()}>
                        <CheckIcon fontSize="small"/>
                    </Button>
                </ButtonGroup>
            </Box>   
        </Box>
        )
    }
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
        }}>
        <Fade in={open}>
            <div className={classes.paper}>
                  <CardMedia
                      className={classes.imgProductModal}
                      component="img"
                      alt="Image product"
                      title="Image Product"
                      image={image.image}/>
                  <Box className={classes.modalText}>
                      <Typography variant="h4"
                                  color="initial">
                          {datos.name}
                      </Typography>
                      <Typography variant="h6" 
                                  color="initial">
                          {datos.description}
                      </Typography>
                  </Box>
              </div>
        </Fade>
    </Modal>
</Box>
)
}
export default CardImage;
