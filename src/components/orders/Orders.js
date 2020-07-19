import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrderRow from './OrderRow';
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
import { loadOrdersAction } from '../../redux/actions/orderAction'

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

const Orders = ({ loadOrdersAction, orders }) => {
  const classes = useStyles();                            

  useEffect(() => {
    axios.get(`${ process.env.REACT_APP_URL_LOCAL }/order`)
        .then((resp) => {
            console.log(resp)
            let orders = resp.data.order
            loadOrdersAction(orders)
        })
        .catch((error) => {
            console.log(error)
        })
  }, [])

  return (
    <div className={classes.content}>
        <Typography variant='h4' className={classes.title}>Pedidos</Typography>
        <div>
            <Box align="right">
                <Link to='/OrderNew'>
                <Button size="small" variant="outlined" color="primary">
                    <AddIcon/>
                </Button>
                </Link>
            </Box>
            <Box align='center' className={classes.boxTable}>
                <Table size="small" className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <Hidden smDown>
                                <TableCell>Telefono</TableCell>
                                <TableCell>Direccion</TableCell>
                            </Hidden>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map((data, index) => (
                                <OrderRow key={index} order={data} />
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
    orders: state.ordersReducer.orders
})
  
const mapDispatchToProps = dispatch => ({
    loadOrdersAction: (data) => {
      dispatch(loadOrdersAction(data))
    },
})

export default connect( mapStateToProps, mapDispatchToProps )(Orders);