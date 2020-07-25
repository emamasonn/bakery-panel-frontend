import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OrderProductRow from './OrderProductRow';
import { connect } from 'react-redux';

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
});

const OrderProducts = ({ products }) => {
    const classes = useStyles();
    const totalPrice = () => {
        let prices = []
        if(products.length !== 0){
            prices = products.map((product) => {
                return Number(product.priceUni) * Number(product.quality)
            })
            return prices.reduce((a=0, b)=> a + b) 
        }else{
            return '0'
        }
    }

    let total = totalPrice()
    
    return (
        <React.Fragment>
            <table className={classes.table}>
                <thead className={classes.thead}>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((cart, index)=>(
                        <OrderProductRow key={index} product={cart}/>
                    ))}
                </tbody>
            </table>
            <div className={classes.contentTotal}>
                <Typography variant='h6' className={classes.titleTotal}>Total</Typography>
                <Typography variant='body1' className={classes.priceTotal}>{`$ ${ total }`}</Typography>
            </div>
        </React.Fragment>
  );
}

const mapStateToProps = state => ({
    products: state.ordersReducer.orderProducts,
})

export default connect( mapStateToProps )(OrderProducts);