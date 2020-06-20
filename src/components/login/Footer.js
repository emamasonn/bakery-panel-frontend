import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({
    direction: {
        background: "#263238",
        color: "#fff",
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom:"-20px"
            },
    icon: {
        fontSize: 12},});

function Footer(){ 
const classes = useStyle();
return(
    <div className={classes.direction}>
    <Grid>
        <Box p={2} textAlign="center">
        <Typography variant="body2">Copyright Ayemostartas <FavoriteBorderIcon className={classes.icon}/> - 2020. Desarrollado por Mayak.</Typography>
        </Box>
    </Grid>
    </div>
    )
}
export default Footer;
