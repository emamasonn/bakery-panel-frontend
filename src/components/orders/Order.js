import React,{ useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Hidden from '@material-ui/core/Hidden';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import Collapse from '@material-ui/core/Collapse';
import Product from './Product';
import ListIcon from '@material-ui/icons/List';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    colorBackground:{
        background:"white"
    },
    bodyDelivered:{
        background: "#9FEBFE",
    },
    bodyNoDelivered:{
        background:"#FEBEBE",
    },
    deleteIcon:{
        color:"#ad172b",
    },
    checkIcon:{
        color: "green",
    },
    createIcon:{
        color:"blue",
    },
    title:{
        fontSize: 30,
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
    },
    text:{
        width:280,
        margin: theme.spacing(1),
        '@media (max-width:600px)': {
            padding:3,
            margin: theme.spacing(0.3),
            }
    },
    content: {
        width: "100%",
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "center",
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 280,
        '@media (max-width:600px)': {
            margin: theme.spacing(0.3),
            width: 300,
            }
    },
    },
    buttonTableCell:{
        display:"flex",
        justifyContent:"flex-end",
        width:"100%"
    },
    editTableCell:{
        paddingBottom: 0, paddingTop: 0,
        background:"white",
    },
    tableCell:{
        display:"flex"
    },
    total:{
        width:100,
        padding:5,
        borderRadius:10,
        background:'#3f51b5',
        color:'white',
    },
    tableRow:{
        display:"flex",
        justifyContent: "space-around"
    }
}));
const Order = ({index, handleRemove}) => {
    //style
    const classes = useStyles();
    //delivery
    const [delivered, setDelivered] = useState(false);
    const toggleChecked = () => {
      setDelivered((prev) => !prev);
    };
    //datos form
    const [datos, setDatos] = useState({
    name:'',
    lastName:'',
    phone:'',
    direction:'',
    department:'',
    city:'',
    cellphone:'',
    email:'',
    note:'',
    });
   //form complete set
    const handleInputChange = (event) => {
        setDatos({...datos, [event.target.name] : event.target.value})
        };                         
    //info
    const [info, setInfo] = useState(false);
    const handleInfo = () =>{
        setEdit(false);
        setInfo(true);
    }
    //edit
    const [edit, setEdit] = useState(true);
    const handleEdit = () =>{
        setEdit(true);
        setInfo(false);
    }
    //textfield
    var textfield = [
        {id:1, defaultValue: datos.name, label:"Nombre", name:"name"},
        {id:2, defaultValue: datos.lastName, label:"Apellido", name:"lastName"},
        {id:3, defaultValue: datos.phone, label:"Telefono", name:"phone"},
        {id:4, defaultValue: datos.direction, label:"Direccion", name:"direction"},
        {id:5, defaultValue: datos.department, label:"Departamento", name:"department"},
        {id:6, defaultValue: datos.city, label:"Ciudad", name:"city"},
        {id:7, defaultValue: datos.cellphone, label:"Celular", name:"cellphone"},
        {id:8, defaultValue: datos.email, label:"Email", name:"email"},
        {id:9, defaultValue: datos.note, label:"Notas", name:"note"},
    ],
    //products
    products = [
        {id:'1', name:'torta', price:250, description:'atrevetete salta del closet destapate quitate el esmalte'},
        {id:'2', name:'alfajores', price:150, description:'atr perro cajeteala piola gato'},
        {id:'3', name:'pastafrola', price:300, description:'no me confundaaas yo no camino para atras como un cangrejooo'}
    ]
    //total
    const [total, setTotal] = useState(0);
    //switch
    let contentInfo= delivered ? (classes.bodyDelivered) : (classes.bodyNoDelivered);
    //saveedit
    const save =()=>{
        setEdit(!edit)
    }
return (
<TableBody  className={edit ? (classes.colorBackground) : (contentInfo)}>
    <TableRow >
        <TableCell>
            {datos.name}
        </TableCell>
        <TableCell>
            {datos.lastName}
        </TableCell>
        <Hidden smDown>
            <TableCell>
                {datos.phone}
            </TableCell>
            <TableCell>
                {datos.direction}
            </TableCell>
        </Hidden>
        <TableCell  align="right"
                    className={classes.tableCell}>
            <ButtonGroup size="small" 
                         aria-label="small outlined button group">
                <Button onClick={handleInfo}> 
                    <ListIcon/>
                </Button>
                <Button onClick={handleEdit}>
                    <CreateIcon className={classes.createIcon}/>
                </Button>
                <Button onClick={() => {handleRemove(index.id);}}> 
                    <DeleteOutlinedIcon className={classes.deleteIcon}/> 
                </Button>
            </ButtonGroup>
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell className={classes.editTableCell} colSpan={6}>
            <Collapse in={info} 
                      timeout="auto" 
                      unmountOnExit>
                    <Typography className={classes.title}>
                        Informacion
                    </Typography>
                    <Box className={classes.content}>
                        {[datos.name, datos.lastName, datos.phone,datos.direction, datos.department, datos.city,datos.cellphone, datos.email, datos.note].map((text, index) => (
                            <Typography key={index} 
                                        className={classes.text}>
                                {text}
                            </Typography>
                        ))}
                    </Box>
                    <Typography className={classes.title}>
                        Productos
                    </Typography>
                    <Typography className={classes.title}>
                        Total = {total}
                    </Typography>
                <Box align="right">
                    <Button variant="outlined"
                            size="small"
                            onClick={() => setInfo(!info)}>
                            <CheckIcon />
                    </Button>
                </Box>
            </Collapse>
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell className={classes.editTableCell} 
                   colSpan={6}>
            <Collapse in={edit} 
                      timeout="auto" 
                      unmountOnExit>
                <Typography className={classes.title}>
                        Editar
                </Typography>
                <div className={classes.content}>
                    {textfield.map((text, index)=>(
                        <TextField
                        key={text.id}
                        defaultValue={text.defaultValue}
                        label={text.label}
                        name={text.name}
                        type="text"
                        required
                        variant="outlined"
                        onChange={handleInputChange}/>
                    ))}
                </div>
                <Table size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Producto
                            </TableCell>
                            <TableCell  align="center">
                                Cantidad
                            </TableCell >
                            <TableCell align="right">
                                Total price ($)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {products.map((product, index) => (
                        <Product key={product.id}
                                 name={product.name}
                                 price={product.price}
                                 total={total}
                                 setTotal={setTotal}
                                 description={product.description}/>
                    ))}
                </Table>
                <Box align="right">
                    <Typography align="center" 
                                className={classes.total}  
                                variant="body1">
                        Total:{total}
                    </Typography>
                    {delivered ? 'entregado' : 'no entregado'}
                    <Switch color="primary" 
                            checked={delivered} 
                            onChange={toggleChecked}/>               
                    <Button variant="outlined"
                            size="small"
                            onClick={save}>
                        <CheckIcon />
                    </Button>
                </Box>
            </Collapse>
        </TableCell>
    </TableRow>
</TableBody>
)
}
export default Order;

