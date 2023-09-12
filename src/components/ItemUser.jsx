import React from "react";
import "./styles/ItemUser.css";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemUser = (props) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/users/${props.user.id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const { id, nombre, pais, email, telefono } = props.user;
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "8px auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{
          flex: 1,
          maxWidth: 200,
          padding: "8px",
          
        }}
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        title="Imagen de usuario"
      />
      <CardContent sx={{ flex: 2 }}>
        <Typography variant="body1">
          <strong>Nombre: </strong> {nombre}
        </Typography>
        <Typography variant="body1">
          <strong>Pais: </strong> {pais}
        </Typography>
        <Typography variant="body1">
          <strong>Correo: </strong> {email}
        </Typography>
        {telefono && (
          <Typography variant="body1">
            <strong>Teléfono: </strong> {telefono}
          </Typography>
        )}
        <br />
        <Box sx={{display:'flex', justifyContent:'space-around' }}>
        {props.isEdit && <Button component={Link} to={`/edit/${id}`} variant="contained"> Editar </Button>}
        {props.isDelete && <Button component={Link} onClick={handleDelete} variant="contained"> Eliminar </Button>}
        </Box>
      </CardContent>
    </Card>
  );
};
export default ItemUser;
