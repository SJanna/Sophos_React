import React from "react";
import "./styles/UserForm.css";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  FilledInput,
  TextField,
} from "@mui/material";

const UserForm = (props) => {
  const { nombre, pais, email, telefono } = props.user;
  return (
    <div>
      <form className="form">
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
      </form>
    </div>
  );
};

export default UserForm;
