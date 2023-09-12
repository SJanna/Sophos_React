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

    state = {
        loading: false,
    }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state);
  };

  render() {
    const { nombre, pais, email, telefono } = this.props.user;
    return (
      <div>
        <div className="title-form">Nuevo Usuario</div>
        <form className="form" onSubmit={this.handleSubmit}>
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
          <Box align="center">
            {this.state.loading && <CircularProgress />}
          </Box>
          <Box align="center">
            <Button variant="contained" color="primary" onClick={()=>this.setState({loading: !this.state.loading})}>Agregar</Button>
            <Button variant="contained" color="secondary" onClick={()=>this.setState({loading: !this.state.loading})}>Agregar</Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default UserForm;
