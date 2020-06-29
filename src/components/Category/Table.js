import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    contentTable:{
        width: "100%",
        height: 50,
        background: "#F0F0F0",
        borderRadius: "10px",
        margin: theme.spacing(2),
        '@media (max-width:600px)': {
            width: "90%",
            margin: theme.spacing(1),
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

const Table = (props) => {
  const classes = useStyles();

  return (
        <div className={classes.contentTable}>
           <table className={classes.table}>
                <tbody>
                    <tr className={classes.trTable}>      
                        <td className={classes.tdNameProduct}>
                            <Typography variant='body2'>nombre</Typography>
                        </td>
                        <td className={classes.tdDescription} 
                        >descripcion </td>
                        <td className={classes.deleteIcon}>
                            <Button><DeleteForeverIcon /></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  );
}

export default Table;