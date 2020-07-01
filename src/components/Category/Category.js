import React,{ useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from  './Table';

const useStyles = makeStyles((theme) => ({
content: {
    marginTop:20,
},
title:{
    marginBottom: 10,
    fontSize: 40,
    fontFamily: "Dancing Script, cursive",
    display: 'flex',
    justifyContent: 'center',
    color: "black",
},
ui:{
    display: 'flex',
    justifyContent: 'center',
    color: "#ad172b",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    '@media (max-width:600px)': {
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      margin: theme.spacing(0.5),
  },
},
button:{
    width: "20%",
    color: 'blue',
    margin: theme.spacing(1),
    padding: "14px",
    '@media (max-width:600px)': {
      width: "100%",
      margin: theme.spacing(0),
  },
},
table:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
},

}));

const Category = () => {
const classes = useStyles();
const [show, setShow] = useState([{id: (new Date().getTime())/1000, num: 0}]);
const add = () => {
setShow([...show, {id:(new Date().getTime())/1000, num: show.length}])
};
return (
    <div className={classes.content}>
        <Toolbar />
            <Typography
                className={classes.title}
            >
                Categorias
            </Typography>
            <div className={classes.ui}>
                <Button
                    className={classes.button}
                    size="large"
                    type="submit"
                    variant="outlined" 
                    color="primary"
                    onClick={() => add()}
                > agregar
                </Button>
            </div>
            <div  className={classes.table}>
                {show.map((form, index) => (
                    <Table key={index}/>
                  ))
                }
            </div>
    </div>
  )
}
export default Category;