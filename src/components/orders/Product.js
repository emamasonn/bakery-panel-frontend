import React,{ useState,} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import TableBody from '@material-ui/core/TableBody';

const useStyles = makeStyles((theme) => ({
    buttonTableCell:{
        display:'flex',
        justifyContent:'center',
    },
    editTableCell:{
        paddingBottom: 0, paddingTop: 0,
        background:"white",
    },
}))

const Product = ({name, price, total, setTotal, description}) => {
const classes = useStyles()

//count
const [count, setCount] = useState(0);
if(count < 0){
    alert('no puede ser negativo')
    setCount(0)
    setTotal(0)
}
const product = price * count

const addProduct = () =>{
    setCount(count+1)
    setTotal(total+price)
}
const removeProduct = () =>{
    setCount(count-1)
    setTotal(total-price)
}
const [open, setOpen] = useState(false);
return (
<TableBody>
    <TableRow>
        <TableCell>
            <IconButton aria-label="expand row" 
                        size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            {name}
        </TableCell>
        <TableCell align="center">
            <Box className={classes.buttonTableCell}>
                <IconButton variant="outlined"
                            size="small"
                            onClick={removeProduct}>
                    <RemoveIcon/>
                </IconButton>
                    <Typography variant="h5">{count}</Typography>
                <IconButton size="small" 
                            variant="outlined"
                            onClick={addProduct}>
                    <AddIcon/>
                </IconButton>
            </Box>
        </TableCell>
        <TableCell align="right">
            {product}
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell className={classes.editTableCell} 
                   colSpan={6}>
            <Collapse in={open} 
                      timeout="auto" 
                      unmountOnExit>
                <Typography variant="body1">
                        {description}
                </Typography>
            </Collapse>
        </TableCell>
    </TableRow>     
</TableBody>
)
}
export default Product
