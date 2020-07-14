import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Order from './Order';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
content: {
    marginTop:20,
    },
title:{
    fontSize: 40,
    fontFamily: "Dancing Script, cursive",
    display: 'flex',
    justifyContent: 'center',
    color: "black",
    },

table: {
    marginBottom:"10px",
  },
button:{
    margin: theme.spacing(2),
    '@media (max-width:600px)': {
        margin: theme.spacing(0),
    },
},
BoxTable:{
    display:"flex",
    width: "100%",
}
}));

 function Orders() {
  const classes = useStyles();
  const [show, setShow] = useState([]);
  const handleRemove = (id) => {
    const newShow = show.filter(item => item.id !== id);
    setShow(newShow);
  }
  const add = () => {
    setShow([...show, {id:(new Date().getTime())/1000, num: show.length}])
    };                            
  return (
    <div className={classes.content}>
        <Toolbar />
            <Typography className={classes.title}>
                Pedidos
            </Typography>
            <Box align="right">
                <Button size="small"
                        type="submit"
                        variant="outlined" 
                        color="primary"
                        onClick={() => add()}> 
                    <AddIcon/>
                </Button>
            </Box>
            <Box align='center' 
                 className={classes.BoxTable}>
                <Table size="small" 
                       className={classes.table} 
                       aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Nombre
                            </TableCell>
                            <TableCell>
                                Apellido
                            </TableCell>
                            <Hidden smDown>
                                <TableCell>
                                    Telefono
                                </TableCell>
                                <TableCell>
                                    Direccion
                                </TableCell>
                            </Hidden>
                            <TableCell align="right">
                                Herramientas
                            </TableCell>
                        </TableRow>
                    </TableHead>
                        {show.map((index) => (
                            <Order key={index.id} 
                                   index={index} 
                                   handleRemove={handleRemove}/>
                        ))}
                </Table>
            </Box>
    </div>
  );
}
export default Orders;