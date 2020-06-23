import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
text:{
    textDecoration: 'none',
    color: '#263238',
}
}))

 const ListLink = (props) => {
     const classes = useStyles();
    return (
        <div>
            <List>
            <Link to={props.link} className={classes.text}>
                <ListItem button key={props.key}>
                    <ListItemIcon>
                    {props.icon}
                    </ListItemIcon>
                      <ListItemText>
                          <Typography variant="body1" >{props.text}
                          </Typography> 
                        </ListItemText>
                </ListItem>
              </Link>
            
          </List>
        </div>
    )
}
export default ListLink;