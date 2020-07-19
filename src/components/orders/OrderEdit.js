import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import OrderProducts from './OrderProducts';
import AllProducts from './AllProducts';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from 'react-redux';
import { loadAllProductsAction } from '../../redux/actions/orderAction'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
      editContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
}));

const OrderEdit = ({ dataEditOrder, loadAllProductsAction })=> {
    const history = useHistory()
    const classes = useStyles();
    const { loadEditOrder, orderProducts } = dataEditOrder
    const [name, setName] = useState(loadEditOrder.name);
    const [ lastName, setLastName ] = useState(loadEditOrder.lastName);
    const [ address, setAddress ] = useState(loadEditOrder.address);
    const [ departament, setDepartament ] = useState(loadEditOrder.departament);
    const [ location, setLocation ] = useState(loadEditOrder.location);
    const [ telephone, setTelephone ] = useState(loadEditOrder.telephone);
    const [ email, setEmail ] = useState(loadEditOrder.email);
    const [ description, setDescription ] = useState(loadEditOrder.description);
    const [ addProducts, setAddProducts ] = useState(true);
    const [qualityPage, setQualityPage] = useState(1);
    //const [modalOrder, setModalOrder] = useState({open: false, error: false});

    const handleChangeName = (event) => {
        let name = event.target.value
        setName(name)
    }

    const handleChangeLastName = (event) => {
        let lastName = event.target.value
        setLastName(lastName)
    }

    const handleChangeAddress = (event) => {
        let address = event.target.value
        setAddress(address)
    }

    const handleChangeDepartament = (event) => {
        let departament = event.target.value
        setDepartament(departament)
    }
    const handleChangeLocation = (event) => {
        let location = event.target.value
        setLocation(location)
    }
    const handleChangeTelephone = (event) => {
        let telephone = event.target.value
        setTelephone(telephone)
    }
    const handleChangeEmail = (event) => {
        let email = event.target.value
        setEmail(email)
    }
    const handleChangeDescription = (event) => {
        let description = event.target.value
        setDescription(description)
    }

    const editOrderApi = (data) => {
        axios.put(`${ process.env.REACT_APP_URL_LOCAL }/order/edit/${ loadEditOrder._id }`, data)
        .then( (resp) => {
            console.log(resp)
            /*setModalOrder({open: true, error: false})
            document.getElementById('id-form-order').reset()
            setTimeout(() => {
                setModalOrder({open: false, error: false})
            }, 2000)*/
        })
        .catch( (error) => {
            console.log(error)
            /*setModalOrder({open: true, error: true})
            setTimeout(() => {
                setModalOrder({open: false, error: true})
            }, 2000)*/
        })
    }

    const handleSubmitOrder = async (event) => {
        event.preventDefault()
        let products = orderProducts
        const data = {
            name,
            lastName,
            address,
            departament,
            location,
            telephone,
            email,
            description,
            products
        }
        console.log(data)
        await editOrderApi(data)
        history.push('/Orders')
    }

    /*const handleCloseModalOrder = () => {
        setModalOrder({open: false, error: false})
    };*/
    const getProductsApi = () => {
        axios.get(`${ process.env.REACT_APP_URL_LOCAL }/product/all/0/3`)
            .then( (resp) => {
                console.log(resp)
                let totalPage = (resp.data.cuanto / 3)
                let val = Math.trunc(totalPage)
                if(totalPage - val > 0){
                    val = val + 1
                }
                setQualityPage(val)
                let products = resp.data.product
                loadAllProductsAction(products)
            })
            .catch( (error) => {
                console.log(error)
            })
    }

    const handleAddProducts = () => {
        getProductsApi()
        setAddProducts(!addProducts)
    }

    return (
    <Container maxWidth='lg' className={classes.containerForm}>
        <Typography variant='h4' className={classes.titleNewOrder}>Editar Pedido</Typography>
        <Paper elevation={0} >
        <Typography variant='h6' className={classes.titleFormOrder}>Datos del Pedido</Typography>
        <form onSubmit={handleSubmitOrder} id='id-form-order'>
            <div>                         
                <TextField
                    defaultValue={name} 
                    onChange={handleChangeName}
                    className={classes.textFile} 
                    label="Nombre" 
                    variant="outlined"
                    size="small"
                    required 
                />
                <TextField
                    defaultValue={lastName}
                    onChange={handleChangeLastName} 
                    className={classes.textFile} 
                    label="Apellido" 
                    variant="outlined"
                    size="small"
                    required 
                />
            <TextField
                defaultValue={address} 
                onChange={handleChangeAddress}
                className={classes.textFile}
                label="Dirección de la calle" 
                variant="outlined"
                size="small"
                required 
            />
            <TextField
                defaultValue={departament} 
                onChange={handleChangeDepartament}
                className={classes.textFile}
                label="Departamento, habitacion, etc" 
                variant="outlined"
                size="small"
                required 
            />
            <TextField
                defaultValue={location} 
                onChange={handleChangeLocation}
                className={classes.textFile}
                label="Localidad/Ciudad" 
                variant="outlined"
                size="small" 
                required
            />
            <TextField
                defaultValue={telephone} 
                onChange={handleChangeTelephone}
                className={classes.textFile}
                label="Telefono" 
                variant="outlined"
                size="small" 
                required
            />
            <TextField
                defaultValue={email}
                onChange={handleChangeEmail}
                className={classes.textFile} 
                label="Direccion de correo electronico" 
                variant="outlined"
                size="small" 
                required
            />
            </div>
            <div>
            <TextField
                defaultValue={description}
                onChange={handleChangeDescription}
                className={classes.textFileDescription}
                label="Fecha y horario de entrega"
                variant="outlined"
                multiline
                rows={6}
                placeholder="Por favor escribir fecha de entrega y franja horaria."
                required
            />
            </div>
            <div>
                <div className={classes.contentTitle}>
                    <Typography variant='h4' className={classes.titleListProduct}>Lista de Productos</Typography>
                </div>
                <div className={classes.editContent}>
                <div className={classes.search}>
                    <InputBase
                        placeholder="Buscar..."
                        inputProps={{ "aria-label": "Buscar" }}
                        //onChange={handleValueSearch}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                    />
                    <Button className={classes.buttonSearch} ><SearchIcon className={classes.iconSearch}/></Button>
                </div> 
                    <Button className={classes.button} onClick={handleAddProducts} variant="contained">
                        {addProducts ? 'Agregar Productos' : 'Listo'}
                    </Button>
                </div>
                {addProducts ? <OrderProducts /> : <AllProducts qualityPage={qualityPage}/>}
            </div>
            <Button type='submit' className={classes.button} onClick={handleSubmitOrder} variant="contained">Editar Pedido</Button>
        </form>
        </Paper>
        {/*<ModalOrder modalState={modalOrder} handleClose={handleCloseModalOrder}/>*/}
    </Container>
    )
};


const mapStateToProps = state => ({
    dataEditOrder: state.ordersReducer,
})
  
const mapDispatchToProps = dispatch => ({
    loadAllProductsAction: (data) => {
        dispatch(loadAllProductsAction(data))
    }, 
})

export default connect( mapStateToProps, mapDispatchToProps )(OrderEdit);
