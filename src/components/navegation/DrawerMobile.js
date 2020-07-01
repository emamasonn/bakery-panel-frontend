import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ListLink from './ListLink';

const useStyles = makeStyles((theme) => ({
menuButtonIcon:{
    color:"white",
},
}))

 const DrawerMobile = (props) => {
const classes = useStyles();
const [drawer, setDrawer] = useState(false);
const toggleDrawer = () => {
      drawer ? setDrawer(false) : setDrawer(true)
}
    return (
<div>
    <Button onClick={toggleDrawer}>
        <MenuIcon className={classes.menuButtonIcon}/>
    </Button>
    <Drawer open={drawer} 
            onClick={toggleDrawer}>
            <ListLink/>
    </Drawer>         
</div>
    )
}
export default DrawerMobile;