import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ProductRow from './ProductRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import TableBody from '@material-ui/core/TableBody';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
//import { loadOrdersAction } from '../../redux/actions/orderAction'

const useStyles = makeStyles((theme) => ({
    content: {
        margin: '150px 50px',
        '@media (max-width:600px)': {
            margin: '100px 10px',
        }
    },
    title:{
        //fontSize: 40,
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        color: "black",
    },
    table: {
        marginBottom: 10,
        /*'& .MuiTableCell-sizeSmall': {
            padding: '6px 16px 6px 16px',
        }*/
    },
    boxTable:{
        display:"flex",
        width: "100%",
    }
}));

const Products = () => {
  const classes = useStyles();                            

  /*useEffect(() => {
    axios.get(`${ process.env.REACT_APP_URL_LOCAL }/order`)
        .then((resp) => {
            console.log(resp)
            let orders = resp.data.order
            loadOrdersAction(orders)
        })
        .catch((error) => {
            console.log(error)
        })
  }, [])*/

  const products = [
    {
        "available": true,
        "_id": "5ef7b686a22677081852972e",
        "name": "Barra para desayunar",
        "priceUni": 300,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
        "category": "Desayunos",
        "img": {
            "_id": "5ef7b2b1263b521c88579d50",
            "name": "CanonesRellenos.jpg"
        },
        "__v": 0
    },
    {
        "available": true,
        "_id": "5ef7b6d0a22677081852972f",
        "name": "Cañones rellenos con algo",
        "priceUni": 600,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
        "category": "Dulces",
        "img": {
            "_id": "5ef7b2b1263b521c88579d50",
            "name": "CanonesRellenos.jpg"
        },
        "__v": 0
    },
    {
        "available": true,
        "_id": "5ef7c191a226770818529730",
        "name": "Buccellato lo mejor",
        "priceUni": 1000,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
        "category": "Otros",
        "img": {
            "_id": "5ef7b32020c5eb10d4158e83",
            "name": "TodoDulceconpasas.jpg"
        },
        "__v": 0
    }
]

  return (
    <div className={classes.content}>
        <Typography variant='h4' className={classes.title}>Productos</Typography>
        <div>
            <Box align="right">
                <Link to='/ProductNew'>
                    <Button size="small" variant="outlined" color="primary">
                        <AddIcon/>
                    </Button>
                </Link>
            </Box>
            <Box align='center' className={classes.boxTable}>
                <Table size="small" className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map((data, index) => (
                                <ProductRow key={index} product={data} />
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </div>
    </div>
  );
}

/*const mapStateToProps = state => ({
    orders: state.ordersReducer.orders
})
  
const mapDispatchToProps = dispatch => ({
    loadOrdersAction: (data) => {
      dispatch(loadOrdersAction(data))
    },
})*/

export default /*connect( mapStateToProps, mapDispatchToProps )*/(Products);