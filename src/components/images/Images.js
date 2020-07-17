import React,{ useState } from "react";
import { makeStyles} from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import Typography from '@material-ui/core/Typography';
import CardImage from './CardImage';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    title:{
        marginBottom: 10,
        fontSize: 40,
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        color: "black",
    },
    boxCard:{
        display:"flex",
        flexWrap:"wrap-reverse",
        justifyContent:"center",
        flexDirection: "row-reverse",
    },
    }));

function Image() {
  const classes = useStyles(); 

  const [card, setCard] = useState([])

  const add = () => {
    setCard([...card, {id:(new Date().getTime())/1000, num: card.length}])
  }
  const handleRemove = (id) => {
    const newShow = card.filter(item => item.id !== id);
    setCard(newShow);
  }
  return (
    <div>
        <Toolbar />
        <Typography className={classes.title}>
            Imagenes
        </Typography>
        <Box align="right" mr={2}>
            <Button
                size="large"
                type="submit"
                variant="outlined" 
                color="primary"
                onClick={() => add()}> 
                <AddIcon/> agregar
            </Button>
        </Box>
        <Box className={classes.boxCard}>
            {card.map((card) =>(
                <CardImage key={card.id}
                id={card.id}
                handleRemove={handleRemove}/>
            ))}
        </Box>
    </div>
  );
}
export default Image;