import React from "react";
import "./styles/ItemUser.css";

export default class ItemUser extends React.Component {
  state = {};
  render() {
    const { nombre, pais, email, telefono } = this.props.user;
    return (
      <div className="details">
        <p>
          <strong>Nombre: {nombre}</strong>
        </p>
        <p>
          <strong>Pais: {pais}</strong>
        </p>
        <p>
          <strong>Correo: {email}</strong>
        </p>
        {telefono && (
          <p>
            <strong>Teléfono: {telefono}</strong>
          </p>
        )}
        {this.props.enableButton && <button> Haz Clic </button>}
      </div>
    );
  }
}
// exports default ItemUser;
