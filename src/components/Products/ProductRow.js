import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ListIcon from '@material-ui/icons/List';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { editDataProductsAction, deleteProductsAction } from '../../redux/actions/productsAction'
import axios from 'axios'
import imagen from '../../assets/logodos.png'

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
    },
    imgProduct: {
        width: 70,
    }
}));

const ProductRow = ({ product, editDataProductsAction, deleteProductsAction }) => {
    const classes = useStyles();
    const [ openDescription, setOpenDescription ] = useState(false);
    const { _id, name, priceUni, description, category, img, available } = product
    
    const handleEditProduct = () => {
        editDataProductsAction(product)
    }
    
    const handleDeleteProduct = () => {
        axios.delete(`${ process.env.REACT_APP_URL_LOCAL }/product/${ _id }`)
            .then((resp)=>{
                deleteProductsAction(_id)
                document.location.reload()
            })
            .catch((error)=>{
                console.log(error)
            })
    }

return (
    <React.Fragment>
    <TableRow >
        <TableCell><img src={imagen} className={classes.imgProduct}/></TableCell>
        <TableCell>{ name }</TableCell>
        <TableCell>{ category }</TableCell>
        <TableCell>{ priceUni }</TableCell>
        <TableCell  align="right" >
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={() => setOpenDescription(!openDescription)}> 
                    <ListIcon/>
                </Button>
                <Button onClick={handleEditProduct}>
                    <Link to='/ProductEdit'>
                        <CreateIcon className={classes.createIcon}/>
                    </Link>
                </Button>
                <Button onClick={handleDeleteProduct}> 
                    <DeleteOutlinedIcon className={classes.deleteIcon}/> 
                </Button>
            </ButtonGroup>
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell className={classes.editTableCell} colSpan={6}>
            <Collapse in={openDescription} timeout="auto" unmountOnExit>
                <div className={classes.descriptionOrder}>
                    <label className={classes.labelOrder}>Descripcion:</label>                        
                    <Typography className={classes.text}>{ description }</Typography>
                </div>            
            </Collapse>
        </TableCell>
    </TableRow>
    </React.Fragment>    
    )
}

const mapDispatchToProps = dispatch => ({
    editDataProductsAction: (data) => {
      dispatch(editDataProductsAction(data))
    },
    deleteProductsAction: (id) => {
        dispatch(deleteProductsAction(id))
    },
})

export default connect( null, mapDispatchToProps )(ProductRow);

