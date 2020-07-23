import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MessageRow from './MessageRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import TableBody from '@material-ui/core/TableBody';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { loadMessagesAction } from '../../redux/actions/messagesAction'

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
        margin: '50px 0',
        /*'& .MuiTableCell-sizeSmall': {
            padding: '6px 16px 6px 16px',
        }*/
    },
    boxTable:{
        display:"flex",
        width: "100%",
    }
}));

const Messages = ({ loadMessagesAction, messages }) => {
  const classes = useStyles();
  const [reload, setReload] = useState(false)                            

  useEffect(() => {
    axios.get(`${ process.env.REACT_APP_URL_LOCAL }/message`)
        .then((resp) => {
            console.log(resp)
            let messages = resp.data.messages
            loadMessagesAction(messages)
        })
        .catch((error) => {
            console.log(error)
        })
  }, [reload])

  return (
    <div className={classes.content}>
        <Typography variant='h4' className={classes.title}>Consultas</Typography>
        <div>
                <Table size="small" className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            messages.map((data, index) => (
                                <MessageRow key={index} messageData={data} setReload={setReload} reload={reload}/>
                            ))
                        }
                    </TableBody>
                </Table>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
    messages: state.messagesReducer.messages
})
  
const mapDispatchToProps = dispatch => ({
    loadMessagesAction: (data) => {
      dispatch(loadMessagesAction(data))
    },
})

export default connect( mapStateToProps, mapDispatchToProps )(Messages);