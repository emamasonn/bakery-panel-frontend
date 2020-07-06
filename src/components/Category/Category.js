import React,{ useState } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from  './Table';
import AddIcon from '@material-ui/icons/Add';

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
    display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "flex-end",
	alignItems: "stretch",
	alignContent: "flex-start",
    color: "#ad172b",
},
button:{
    margin: theme.spacing(3),
    '@media (max-width:600px)': {
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
            <div  className={classes.table}>
                {show.map((form, index) => (
                    <Table key={index}/>
                  ))
                }
            </div>
            <div className={classes.ui}>
                <Button
                    className={classes.button}
                    size="large"
                    type="submit"
                    variant="outlined" 
                    color="primary"
                    onClick={() => add()}
                > <AddIcon/>
                </Button>
            </div>
    </div>
  )
}
export default Category;