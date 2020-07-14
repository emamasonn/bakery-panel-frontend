import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: 20,
  },
  divButton: {
    margin: theme.spacing(1),
  },
  button: {
    padding: "10px",
  },
  iconButton: {
    color: "blue",
    marginRight: 7,
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

function Settings() {
  const classes = useStyles();
  const [show, setShow] = useState([
    { id: new Date().getTime() / 1000, num: 0 },
  ]);
  const add = () => {
    setShow([...show, { id: new Date().getTime() / 1000, num: show.length }]);
  };

 const handleRemove = (id) => {
    const newShow = show.filter(item => item.id !== id);
    setShow(newShow);
  }
return (
        <div className={classes.content}>
             <Toolbar />
                <div className={classes.form}>
                    { show.map((form, index) => (
                        <Form key={form.id}
                              id={form.id}
                              handleRemove={handleRemove}/>
                    )) 
                    }
                </div>
                <Box textAlign="right" className={classes.divButton}>
                    <Button
                        className={classes.button}
                        size="large"
                        type="submit"
                        variant="outlined" 
                        onClick={() => add()}
                            >
                        <AddIcon className={classes.iconButton}/> nueva tienda
                    </Button>
                </Box>
        </div>
)
}
export default Settings;
