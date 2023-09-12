import React, { Component } from "react";
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
  CircularProgress,
} from "@mui/material";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("DidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
  }
  componentWillUnmount() {
    console.log("WillUnmount");
  }
  render() {
    console.log("Render");
    const { nombre, pais, email, telefono } = this.props.user;
    return (
      <div>
        <form className="form">
          <FormControl fullWidth>
            <InputLabel>Nombre: </InputLabel>
            <Input
              type="text"
              name="nombre"
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
              value={pais}
            />
            <FormHelperText>
              Aquí debes ingresar tu pais de origen
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Correo Electrónico </InputLabel>
            <FilledInput
              type="text"
              name="email"
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
              value={telefono}
            />
          </FormControl>
        </form>
      </div>
    );
  }
}

export default UserForm;
