import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import image from '../../assets/logodos.png'
import { addProductOrderAction, deleteProductOrderAction, subtractProductOrderAction } from '../../redux/actions/orderAction'

const useStyles = makeStyles({
    trTable: {
        '@media (max-width:600px)': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 30,
            borderTop: '2px solid #EFEFEF',
        },
    },
    deleteIcon:{
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'flex-end',
            borderTop: 'none',
        },
    },
    buttonDeleteIcon: {
        display: 'flex',
        padding: '6px 0',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tdImg: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            position: 'absolute',
            border: 'none',
            borderTop: 'none',
        },
    },
    productImg: {
        width: 70,
        height: 60,
        margin: 5,
        '@media (max-width:600px)': {
            width: 115,
            height: 117,
        },
    },
    tdNameProduct: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            position: 'absolute',
            border: 'none',
            left: 125,
            top: 10,
            borderTop: 'none',
        },
    },
    tdPrice: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 125,
            borderTop: 'none',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 16,
            marginTop: 5,
        },
    },
    tdQuantity: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 125,
            borderTop: 'none',
        },
    },  
    quantity: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    removeIcon: {
        minWidth: 30,
        background: '#ad172b',
        '@media (max-width:600px)': {
            padding: 0,
        },
        '&:hover': {
            background: '#d32f2f',
        }
    },
    icon: {
        fontSize: 15,
    },
    quantityNumber: {
        margin: 5,
        fontSize: 15,
    },
    addIcon: {
        minWidth: 30,
        background: '#ad172b',
        '@media (max-width:600px)': {
            padding: 0,
        },
        '&:hover': {
            background: '#d32f2f',
        }
    },
    tdTotal: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 125,
            borderTop: 'none',
            color: "#ad172b",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 16,
            marginTop: 5,
        },
    },
});

const OrderProductRow = ({ product, subtractProductOrderAction, addProductOrderAction, deleteProductOrderAction }) => {
    const classes = useStyles();
    const { name, priceUni, quality, _id, img } = product
    const [qualityProduct, setQualityProduct] = useState(quality)
    //const nameImg = img.name
    const total = qualityProduct * priceUni
    const handleDeleteProduct = (id) => {
        deleteProductOrderAction(id)
    }

    const handleSubtractOrderProduct = (id) => {
        if(quality > 1){
            setQualityProduct(qualityProduct - 1)
            subtractProductOrderAction(id)
        }
    }

    const handleAddOrderProduct = (product) => {
        setQualityProduct(qualityProduct + 1)
        addProductOrderAction(product)
    }

    return(
        <tr className={classes.trTable}>
            <td className={classes.deleteIcon}>
                <Button 
                    className={classes.buttonDeleteIcon} 
                    onClick={() => handleDeleteProduct(_id)}
                >
                    <DeleteForeverIcon />
                </Button>
            </td>
            <td className={classes.tdImg}>
                <img className={classes.productImg} src={image} alt='Product'/>
            </td>
            <td className={classes.tdNameProduct}>
                <Typography variant='body2'>{ name }</Typography>
            </td>
            <td className={classes.tdPrice} data-title='Precio'>{`$ ${ priceUni }`}</td>
            <td className={classes.tdQuantity} data-title='Cantidad'>
                <div className={classes.quantity}>
                    <Button 
                        className={classes.removeIcon} 
                        onClick={() => handleSubtractOrderProduct(_id)}
                    >
                        <RemoveIcon className={classes.icon}/>
                    </Button>
                    <Typography variant='body2' className={classes.quantityNumber}>{ qualityProduct }</Typography>
                    <Button 
                        className={classes.addIcon}
                        onClick={() => handleAddOrderProduct(product)}
                    >
                        <AddIcon className={classes.icon}/>
                    </Button>
                </div>
            </td>
            <td className={classes.tdTotal} data-title='Total'>{`$ ${ total }`}</td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteProductOrderAction: (id) => {
      dispatch(deleteProductOrderAction(id))
    },
    addProductOrderAction: (data) => {
        dispatch(addProductOrderAction(data))
    },
    subtractProductOrderAction: (id) => {
        dispatch(subtractProductOrderAction(id))
    }
})
  
export default connect(null, mapDispatchToProps)(OrderProductRow);