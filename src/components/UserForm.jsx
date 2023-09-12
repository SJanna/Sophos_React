import React, { Component } from "react";
import "./styles/UserForm.css";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

export class UserForm extends Component {
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
            <InputLabel>Nombre</InputLabel>
            <Input
              type="text"
              name="nombre"
              onChange={this.props.onChange}
              value={nombre}
            />
            <FormHelperText>
              Aquí debes ingresar tu nombre y Apellido
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Pais</InputLabel>
            <Input
              type="text"
              name="pais"
              onChange={this.props.onChange}
              value={pais}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Correo Electrónico </InputLabel>
            <Input
              type="text"
              name="email"
              onChange={this.props.onChange}
              value={email}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel> Teléfono </InputLabel>
            <Input
              type="text"
              name="telefono"
              onChange={this.props.onChange}
              value={telefono}
            />
          </FormControl>
          <button>Agregar</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
