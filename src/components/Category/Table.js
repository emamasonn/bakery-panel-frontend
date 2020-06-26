import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    contentTable:{
        background: "#F0F0F0",
        borderRadius: "10px",
        marginTop: 10,
        marginBottom: 10,
        padding: theme.spacing(1),
        margin: theme.spacing(2),
        '@media (max-width:600px)': {
            width: 280,
        },
    },
    trTable: {
        '@media (max-width:600px)': {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    table: {
        width: 'inherit',
    },
    deleteIcon:{
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'flex-end',
            marginLeft: 200,
        },
    },
    
    tdNameProduct: {
        '@media (max-width:600px)': {
            marginBottom: 10,
            display: "flex",
        },
    },
    tdDescription: {
        '@media (max-width:600px)': {
            display: 'flex',
            marginBottom: 10,
        },
    },
}));

const Table = () => {
  const classes = useStyles();

  return (
        <Container maxWidth='lg' className={classes.contentTable}>
            <table className={classes.table}>
                <tbody>
                    <tr className={classes.trTable}>      
                        <td className={classes.tdNameProduct}>
                            <Typography variant='body2'>Nombre</Typography>
                        </td>
                        <td className={classes.tdDescription} 
                        >Descripcion</td>
                        <td className={classes.deleteIcon}>
                            <Button><DeleteForeverIcon /></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
  );
}

export default Table;