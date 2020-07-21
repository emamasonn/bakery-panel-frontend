import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MessageRow from './MessageRow';
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
        margin: '50px 0',
        /*'& .MuiTableCell-sizeSmall': {
            padding: '6px 16px 6px 16px',
        }*/
    },
    boxTable:{
        display:"flex",
        width: "100%",
    }
}));

const Messages = ({ loadOrdersAction, orders }) => {
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

  const messages = [
    {
        "answered": true,
        "_id": "5f073d876e44cf23d076c349",
        "name": "Carlos",
        "lastName": "Mason",
        "email": "ema@gmail.com",
        "telephone": "2217788991",
        "message": "este es el mensaje",
        "__v": 0
    },
    {
        "answered": false,
        "_id": "5f073dac6e44cf23d076c34a",
        "name": "Carlos",
        "lastName": "Mason",
        "email": "ema@gmail.com",
        "telephone": "2217788991",
        "message": "este es el mensaje",
        "__v": 0
    },
    {
        "answered": false,
        "_id": "5f075567b11ab423e806fe83",
        "name": "Carlos",
        "lastName": "Mason",
        "email": "emamasonn@gmail.com",
        "telephone": "2217788991",
        "message": "Buenas! \n\nNecesitaria hacer una consulta de si sihuen haciendo pasteles de ricota.\n\nGracias.\nSaludos, David!",
        "__v": 0
    },
  ]

  return (
    <div className={classes.content}>
        <Typography variant='h4' className={classes.title}>Consultas</Typography>
        <div>
                <Table size="small" className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            messages.map((data, index) => (
                                <MessageRow key={index} messageData={data} />
                            ))
                        }
                    </TableBody>
                </Table>
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

export default /*connect( mapStateToProps, mapDispatchToProps )*/(Messages);