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
  console.log(name, picture, location, email, phone)
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
        src={picture.large}
        title="Imagen de usuario"
      />
      <CardContent sx={{ flex: 2 }}>
        <Typography variant="body1">
          <strong>Nombre: </strong> {name.title} {name.first} {name.last}
        </Typography>
        <Typography variant="body1">
          <strong>Pais: </strong> {location.country}
        </Typography>
        <Typography variant="body1">
          <strong>Correo: </strong> {email}
        </Typography>
        <Typography variant="body1">
          <strong>Teléfono: </strong> {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default SingleUser;
