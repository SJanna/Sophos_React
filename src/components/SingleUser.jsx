import React from "react";
import "./styles/ItemUser.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleUser = ({ name, picture, location, email, phone }) => {
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
        <Typography variant="body1">
          <strong>Teléfono: </strong> {telefono}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default SingleUser;
