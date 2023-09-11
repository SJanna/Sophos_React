import React from "react";
import "./styles/ItemUser.css";


export default class ItemUser extends React.Component {
  state = {};
  render() {
    const {name, pais, email} = this.props.user;
    return (
      <div className="details">
        <p>
          <strong>Nombre: {name}</strong>
        </p>
        <p>
          <strong>Pais: {pais}</strong>
        </p>
        <p>
          <strong>Correo: {email}</strong>
        </p>
        {this.props.enableButton && <button> Haz Clic </button>}
      </div>
    );
  }
}
// exports default ItemUser;
