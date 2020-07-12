import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    padding: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "1px solid #F0F0F0",
    "@media (max-width:600px)": {
      margin: theme.spacing(0.5),
    },
  },
  contentInfo: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  contentButton: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: "0.2em",
  },
  deleteIcon: {
    color: "#ad172b",
  },
  editIcon: {
    color: "blue",
  },
  textfieldSmall: {
    margin: theme.spacing(1),
    width: "25%",
    "@media (max-width:600px)": {
      width: "100%",
      margin: theme.spacing(0),
    },
  },
  textfieldDescription: {
    margin: theme.spacing(1),
    width: "95%",
    "@media (max-width:600px)": {
      width: "100%",
      margin: theme.spacing(0),
    },
  },
  editInfo: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  checkIcon: {
    color: "green",
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  contentInfoTitle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentInfoName: {
    marginRight: theme.spacing(1),
  },
  containerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Product = () => {
  const classes = useStyles();
  const [datos, setDatos] = useState({
    name: "",
    description: "",
  });

  const [del, setDelete] = useState(true);

  const [edit, setEdit] = useState(true);

  const handleInputChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  return (
    <div>
      {del ? (
        <Paper className={classes.root}>
          <div className={classes.avatar}>
            <ListItemAvatar>
              <Avatar alt={"Fotito del producto"} className={classes.large} />
            </ListItemAvatar>
          </div>
          {edit ? (
            <div className={classes.editInfo}>
              <TextField
                className={classes.textfieldSmall}
                defaultValue={datos.name}
                label="Nombre"
                name="name"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <TextField
                className={classes.textfieldSmall}
                defaultValue={datos.precio}
                label="Precio"
                name="precio"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />

              <TextField
                className={classes.textfieldSmall}
                defaultValue={datos.categoria}
                label="Categoría"
                name="categoria"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <div className={classes.containerButton}>
                <Button
                  className={classes.addButton}
                  size="medium"
                  type="submit"
                  variant="outlined"
                  color="primary"
                  onClick={"seleccionar imagen"}
                >
                  Elegir imagen
                </Button>
              </div>

              <TextField
                className={classes.textfieldDescription}
                defaultValue={datos.description}
                multiline
                label="Descripcion"
                name="description"
                rows={3}
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <div className={classes.contentInfo}>
              <div className={classes.contentInfoTitle}>
                <Typography variant="h4" className={classes.contentInfoName}>
                  {datos.name}
                </Typography>
                <Typography variant="h6">{datos.categoria}</Typography>
              </div>
              <Typography>${datos.precio} </Typography>
              <Typography component="body2">{datos.description}</Typography>
            </div>
          )}

          <div className={classes.contentButton}>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                setDelete(!del);
              }}
            >
              <DeleteOutlinedIcon className={classes.deleteIcon} />
            </Button>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                setEdit(!edit);
              }}
            >
              {edit ? (
                <CheckIcon className={classes.checkIcon} />
              ) : (
                <CreateIcon className={classes.editIcon} />
              )}
            </Button>
          </div>
        </Paper>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Product;
