import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ProductRow from './ProductRow';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { loadListProductsAction } from '../../redux/actions/productsAction';

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
    },
    contentPagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    }
}));

const Products = ({ loadListProductsAction, listProducts }) => {
    const classes = useStyles(); 
    const [page, setPage] = useState(1);
    const [qualityPage, setQualityPage] = useState(1);

    const handleChangePagination = (event, value) => {
        setPage(value);
    };                           

  useEffect(() => {
    axios.get(`${ process.env.REACT_APP_URL_LOCAL }/product/all/0/3`)
        .then((resp) => {
            let totalPage = (resp.data.cuanto / 3)
                let val = Math.trunc(totalPage)
                if(totalPage - val > 0){
                    val = val + 1
                }
            setQualityPage(val)
            let products = resp.data.product
            loadListProductsAction(products)
        })
        .catch((error) => {
            console.log(error)
        })
  }, [])

  useEffect(() => {
    let beginPage = 0
    let endPage = 3
    for(let i=1; i<page; i++){
        beginPage += 3
    }
    axios.get(`${ process.env.REACT_APP_URL_LOCAL }/product/all/${ beginPage }/${ endPage }`)
        .then( (resp) => {
            let products = resp.data.product
            loadListProductsAction(products)
        })
        .catch( (error) => {
            console.log(error)
        })
    }, [page]);

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
                            listProducts.map((data, index) => (
                                <ProductRow key={index} product={data}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </div>
        <div className={classes.contentPagination}>
            <Pagination size="small" count={qualityPage} page={page} onChange={handleChangePagination}/>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
    listProducts: state.productsReducer.listProducts
})
  
const mapDispatchToProps = dispatch => ({
    loadListProductsAction: (data) => {
      dispatch(loadListProductsAction(data))
    },
})

export default connect( mapStateToProps, mapDispatchToProps )(Products);