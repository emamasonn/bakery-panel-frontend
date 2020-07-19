import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
//import { loadAllProductsAction, loadProductsOrderAction } from '../../redux/actions/orderAction'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
//import ModalOrder from './ModalOrder'

const useStyles = makeStyles(({  
    containerForm: {
        marginTop: 120,
        marginBottom: 50,

    },
    titleNewOrder: {
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        color: "#ad172b" 
    },
    titleFormOrder: {
        margin: '20px 0',
    },
    formOrder: {
        display: 'flex',
        //justifyContent: 'space-between',
        alignItems: 'center',
        //flexDirection: 'column',
        //margin: 40,
    },
    contentName: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 30,
    },
    name:{
        width: '45%',
        '& label.Mui-focused': {
            color: '#ad172b',
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ad172b',
                borderWidth: 1,
            },
        },
        '@media (max-width:600px)': {
            width: '50%',
            marginRight: 3
        }
    },
    lastName: {
        width: '45%',
        '& label.Mui-focused': {
            color: '#ad172b',
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ad172b',
                borderWidth: 1,
            },
        },
        '@media (max-width:600px)': {
            width: '50%',
            marginLeft: 3,
        }
    },
    textFile: {
        margin: '0 4px 30px 4px',
        width: 300,
        '& label.Mui-focused': {
            color: '#ad172b',
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ad172b',
                borderWidth: 1,
            },
        },
        '@media (max-width:600px)': {
            width: '100%',
        }
    },
    textFileDescription: {
        margin: '0 5px 30px 5px',
        width: '100%',
        '& label.Mui-focused': {
            color: '#ad172b',
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ad172b',
                borderWidth: 1,
            },
        },
        '@media (max-width:600px)': {
            width: '100%',
        }
    },
    paper: {
        maxWidth: 600,
        margin: 'auto',
    },
    contentTitle: {
        marginBottom: 50,
        '@media (max-width:600px)': {
            marginBottom: 0,
        },
    },
    titleListProduct: {
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        color: "#ad172b" 
    },
    search:{
        position: 'relative',
        width: 200,
        marginBottom: 20,
      },
      inputRoot: {
        border: '2px solid #eeeeee',
        padding: 5,
        height: 40,
        borderRadius: 4,
        width: '100%',
      },
      buttonSearch: {
        position: 'absolute',
        right: 2,
        top: 2,
        padding: '3px 0',
        background: '#fff',
        '&:hover':{
          background: '#fff',
        },
      },
      iconSearch: {
        fontSize: 30,
        color: '#eeeeee',
        '&:hover': {
          color: '#ad172b',
        },
      },
}));

const ProductEdit = ({ loadAllProductsAction, orderProducts, loadProductsOrderAction })=> {
    const history = useHistory()
    const classes = useStyles();
    const [name, setName] = useState();
    const [ priceUni, setPriceUni ] = useState();
    const [ category, setCategory ] = useState();
    const [ image, setImage ] = useState();
    const [ description, setDescription ] = useState();
    //const [modalOrder, setModalOrder] = useState({open: false, error: false});

    const handleChangeName = (event) => {
        let name = event.target.value
        setName(name)
    }

    const handleChangePriceUni = (event) => {
        let priceProduct = event.target.value
        setPriceUni(priceProduct)
    }

    const handleChangeCategory = (event) => {
        let categoryProduct = event.target.value
        setCategory(categoryProduct)
    }

    const handleChangeImage = (event) => {
        let imageProduct = event.target.value
        setImage(imageProduct)
    }

    const handleChangeDescription = (event) => {
        let description = event.target.value
        setDescription(description)
    }

    /*const sendOrderApi = (data) => {
        axios.post(`${ process.env.REACT_APP_URL_LOCAL }/order`, data)
        .then( (resp) => {
            console.log(resp)
            /*setModalOrder({open: true, error: false})
            document.getElementById('id-form-order').reset()
            setTimeout(() => {
                setModalOrder({open: false, error: false})
            }, 2000)
        })
        .catch( (error) => {
            console.log(error)
            /*setModalOrder({open: true, error: true})
            setTimeout(() => {
                setModalOrder({open: false, error: true})
            }, 2000)
        })
    }*/

    const handleSubmitProduct = async (event) => {
        /*event.preventDefault()

        const data = {
            name,
        }*/
        //await sendOrderApi(data)
        //history.push('/Orders')
    }

    /*const handleCloseModalOrder = () => {
        setModalOrder({open: false, error: false})
    };*/

    return (
    <Container maxWidth='lg' className={classes.containerForm}>
        <Typography variant='h4' className={classes.titleNewOrder}>Nuevo Producto</Typography>
        <Paper elevation={0} >
        <Typography variant='h6' className={classes.titleFormOrder}>Datos del Producto</Typography>
        <form onSubmit={handleSubmitProduct} id='id-form-product'>
            <div>                         
                <TextField 
                    onChange={handleChangeName}
                    className={classes.textFile} 
                    label="Nombre" 
                    variant="outlined"
                    size="small"
                    required 
                />
                <TextField
                    onChange={handleChangePriceUni} 
                    className={classes.textFile} 
                    label="Precio"
                    variant="outlined"
                    size="small"
                    required 
                />
            <TextField  
                value={category} 
                select
                onChange={handleChangeCategory}
                label="Categoria"
                required
                size="small"
                variant="outlined" 
                className={classes.textFile}
            >
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
            </TextField>
            <TextField  
                value={image} 
                select
                onChange={handleChangeImage}
                label="Imagen"
                required
                size="small"
                variant="outlined" 
                className={classes.textFile}
            >
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
            </TextField>
            </div>
            <div>
            <TextField
                onChange={handleChangeDescription}
                className={classes.textFileDescription}
                label="Descripcion"
                variant="outlined"
                multiline
                rows={6}
                placeholder="Descripcion del producto"
                required
            />
            </div>
            <Button type='submit' className={classes.button} variant="contained">Cargar Producto</Button>
        </form>
        </Paper>
        {/*<ModalOrder modalState={modalOrder} handleClose={handleCloseModalOrder}/>*/}
    </Container>
    )
};


/*const mapDispatchToProps = dispatch => ({
    loadAllProductsAction: (data) => {
        dispatch(loadAllProductsAction(data))
    },
    loadProductsOrderAction: (data) => {
        dispatch(loadProductsOrderAction(data))
    },
})

const mapStateToProps = state => ({
    orderProducts: state.ordersReducer.orderProducts,
})*/

export default /*connect( mapStateToProps, mapDispatchToProps )*/(ProductEdit);
