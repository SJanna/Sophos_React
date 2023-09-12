import React from "react";
import "./styles/ItemUser.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default class ItemUser extends React.Component {
  state = {};
  render() {
    const { nombre, pais, email, telefono } = this.props.user;
    return (
      <Card>
        <CardMedia component="img" img="/image.png" title="Imagen de usuario"/>
        <CardContent>
        <Typography variant="h5">
          <strong>Nombre: {nombre}</strong>
        </Typography>
        <Typography variant="h5">
          <strong>Pais: {pais}</strong>
        </Typography>
        <Typography variant="h5">
          <strong>Correo: {email}</strong>
        </Typography >
        {telefono && (
          <Typography variant="h5">
            <strong>Teléfono: {telefono}</strong>
          </Typography>
        )}
        </CardContent>

        {this.props.enableButton && <button> Haz Clic </button>}
      </Card>
    );
  }
}
// exports default ItemUser;
