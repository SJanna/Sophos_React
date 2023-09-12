import React, { useEffect, useState } from "react";
import "./styles/UserForm.css";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  FilledInput,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = (props) => {
  const { nombre, pais, email, telefono } = props.user;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.user);
    try {
      const response = await axios.post("http://localhost:3000/users", props.user);
      navigate("/list");

    } catch (error) {
      console.log(error);
    }
  };
const handleEdit = async (e) => {
    e.preventDefault();
    console.log(props.user);
    try {
      const response = await axios.put(`http://localhost:3000/users/${props.user.id}`, props.user);
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel>Nombre: </InputLabel>
          <Input
            type="text"
            name="nombre"
            onChange={props.onChange}
            value={nombre}
          />
          <FormHelperText>
            Aquí debes ingresar tu nombre y apellido
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Pais: </InputLabel>
          <OutlinedInput
            type="text"
            name="pais"
            onChange={props.onChange}
            value={pais}
          />
          <FormHelperText>Aquí debes ingresar tu pais de origen</FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Correo Electrónico </InputLabel>
          <FilledInput
            type="text"
            name="email"
            onChange={props.onChange}
            value={email}
          />
          <FormHelperText>Aquí debes ingresar un email válido</FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Teléfono"
            helperText="Aquí debes ingresar tu número de teléfono"
            variant="outlined"
            name="telefono"
            onChange={props.onChange}
            value={telefono}
          />
        </FormControl>
        <Box align="center">
          {props.isEdit ? (
            <Button onClick={handleEdit} variant="contained" color="success">
              Editar
            </Button>
          ) : (
            <Button type="submit" variant="contained" color="success">
              Crear
            </Button>
          )}
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
