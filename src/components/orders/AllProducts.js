import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AllProductRow from './AllProductRow';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadAllProductsAction } from '../../redux/actions/orderAction'

const useStyles = makeStyles({
    contentTable:{
        marginTop: 160,
        marginBottom: 50,
        '@media (max-width:600px)': {
            marginTop: 100,
        },
    },
    table: {
        borderSpacing: 'unset',
        //width: 'inherit',
        width: '100%',
        '& td': {
            '&:before': {
                '@media (max-width:600px)': {
                    content: 'attr(data-title)',
                    color: '#2d2a2a',
                    fontSize: 12,
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    paddingTop: 3,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                },
            }
        },
    },
    thead: {
        fontFamily: "Dancing Script, cursive",
        color: "#2d2a2a", 
        fontSize: 20,
        textAlign: 'left',
        '& th': {
            fontWeight: '400',
        },
        '@media (max-width:600px)': {
            display: 'none',
        },
    },
    contentButtonFinish:{
        marginTop: 30,
        textAlign: 'right',
        '@media (max-width:600px)': {
            textAlign: 'center',
        },
    },
    buttonFinishOrder: {
        background: '#ad172b',
        color: '#fff',
        '&:hover': {
            background: '#d32f2f',
        }
    },
    linkButtonFinish: {
        textDecoration: 'none',
    },
    contentTotal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 30,
    },
    titleTotal: {
        marginRight: 25,
    },
    priceTotal: {
        color: '#ad172b',
        fontSize: 20,
    },
    contentPagination: {
        display: 'flex',
        justifyContent: 'center',
    }
});

const AllProducts = ({ qualityPage, allProducts, loadAllProductsAction, orderProducts}) => {
    const classes = useStyles();
    const [page, setPage] = useState(1);
  
    const handleChangePagination = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        let beginPage = 0
        let endPage = 3
        for(let i=1; i<page; i++){
            beginPage += 3
        }
        axios.get(`${ process.env.REACT_APP_URL_LOCAL }/product/all/${ beginPage }/${ endPage }`)
            .then( (resp) => {
                let product = resp.data.product
                loadAllProductsAction(product)
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [page]);

    const totalPrice = () => {
        let prices = []
        if(orderProducts.length !== 0){
            prices = orderProducts.map((product) => {
                return Number(product.priceUni) * Number(product.quality)
            })
            return prices.reduce((a=0, b)=> a + b) 
        }else{
            return '0.00'
        }
    }

    let total = totalPrice()
    
    return (
        <React.Fragment>
            <table className={classes.table}>
                <thead className={classes.thead}>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((cart, index)=>(
                        <AllProductRow key={index} product={cart}/>
                    ))}
                </tbody>
            </table>
            <div className={classes.contentTotal}>
                <Typography variant='h6' className={classes.titleTotal}>Total</Typography>
                <Typography variant='body1' className={classes.priceTotal}>{`$ ${ total }`}</Typography>
            </div>
            <div className={classes.contentPagination}>
                <Pagination size="small" count={qualityPage} page={page} onChange={handleChangePagination}/>
            </div>
        </React.Fragment>
  );
}

const mapStateToProps = state => ({
    allProducts: state.ordersReducer.allProducts,
    orderProducts: state.ordersReducer.orderProducts
})

const mapDispatchToProps = dispatch => ({
    loadAllProductsAction: (data) => {
        dispatch(loadAllProductsAction(data))
      }, 
})
  
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);