import React,{ useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
import ListIcon from '@material-ui/icons/List';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loadEditOrderAction, loadProductsOrderAction, deleteOrderAction } from '../../redux/actions/orderAction'
import axios from 'axios'

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
        //fontSize: 30,
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        marginTop: 25,
    },
    text:{
        fontSize: 15,
        //width:280,
        //margin: theme.spacing(1),
        /*'@media (max-width:600px)': {
            padding:3,
            margin: theme.spacing(0.3),
            }*/
    },
    content: {
        width: "100%",
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: '30px 0',
        /*'& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 280,
        '@media (max-width:600px)': {
            margin: theme.spacing(0.3),
            width: 300,
            }
    },*/
    },
    buttonTableCell:{
        display:"flex",
        justifyContent:"flex-end",
        width:"100%"
    },
    editTableCell:{
        paddingBottom: 0, 
        paddingTop: 0,
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
    },
    dataOrder: {
        width: 200,
        margin: '10px 0',
        '@media (max-width:600px)': {
            margin: '3px 0',
        }
    },
    labelOrder: {
        fontSize: 12,
        color: '#ad172b',        
    },
    descriptionOrder: {
        margin: '10px 0',
    },
    contentTableProducts: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
    },
    tableProducts: {
        width: '100%',
        maxWidth: 700,
    }
}));

const OrderRow = ({ order, loadEditOrderAction, loadProductsOrderAction, deleteOrderAction }) => {
    const classes = useStyles();
    const [ openInformation, setOpenInformation ] = useState(false);
    const { _id, name, lastName, address, departament, location, telephone, email, description, available, products} = order
    
    const handleEditOrder = () => {
        loadEditOrderAction(order)
        loadProductsOrderAction(products)
    }

    const handleDeleteOrder = () => {
        axios.delete(`${ process.env.REACT_APP_URL_LOCAL }/order/delete/${ _id }`)
            .then((resp)=>{
                deleteOrderAction(_id)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

return (
    <React.Fragment>
    <TableRow >
        <TableCell>{`${ name } ${ lastName }`}</TableCell>
        <Hidden smDown>
            <TableCell>{telephone}</TableCell>
            <TableCell>{address}</TableCell></Hidden>
        <TableCell  align="right" className={classes.tableCell}>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={() => setOpenInformation(!openInformation)}> 
                    <ListIcon/>
                </Button>
                <Button onClick={handleEditOrder}>
                    <Link to='/OrderEdit'>
                        <CreateIcon className={classes.createIcon}/>
                    </Link>
                </Button>
                <Button onClick={handleDeleteOrder}> 
                    <DeleteOutlinedIcon className={classes.deleteIcon}/> 
                </Button>
            </ButtonGroup>
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell className={classes.editTableCell} colSpan={6}>
            <Collapse in={openInformation} timeout="auto" unmountOnExit>
                <Typography variant='h4' className={classes.title}>Informacion</Typography>
                <Box className={classes.content}>
                    <div className={classes.dataOrder}>
                        <label className={classes.labelOrder}>Nombre:</label>
                        <Typography className={classes.text}>{`${ name } ${ lastName }`}</Typography>
                    </div>
                    <div className={classes.dataOrder}>
                        <label className={classes.labelOrder}>Direccion:</label>
                        <Typography className={classes.text}>{address}</Typography>
                    </div>
                    <div className={classes.dataOrder}>
                        <label className={classes.labelOrder}>Departamento:</label>
                        <Typography className={classes.text}>{departament}</Typography>
                    </div>
                    <div className={classes.dataOrder}>
                        <label className={classes.labelOrder}>Localidad:</label>
                        <Typography className={classes.text}>{location}</Typography>
                    </div>
                    <div className={classes.dataOrder}>
                        <label className={classes.labelOrder}>Telefono:</label>
                        <Typography className={classes.text}>{telephone}</Typography>
                    </div>
                    <div className={classes.dataOrder}>
                        <label className={classes.labelOrder}>Email:</label>                        
                        <Typography className={classes.text}>{email}</Typography>
                    </div>
                    <div className={classes.descriptionOrder}>
                        <label className={classes.labelOrder}>Descripcion:</label>                        
                        <Typography className={classes.text}>{description}</Typography>
                    </div>            
                </Box>
                <div className={classes.contentTableProducts}>
                    <table className={classes.tableProducts}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, data)=>(
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.quality}</td>
                                        <td>{`$ ${ product.priceUni * product.quality }`}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Collapse>
        </TableCell>
    </TableRow>
    </React.Fragment>    
    )
}

const mapDispatchToProps = dispatch => ({
    loadEditOrderAction: (data) => {
      dispatch(loadEditOrderAction(data))
    },
    loadProductsOrderAction: (data) => {
        dispatch(loadProductsOrderAction(data))
    },
    deleteOrderAction: (id) => {
        dispatch(deleteOrderAction(id))
    },
})

export default connect( null, mapDispatchToProps )(OrderRow);

