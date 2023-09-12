import React, { Component } from "react";
import UserForm from "../components/UserForm";
import ItemUser from "../components/ItemUser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      pais: "",
      email: "",
      telefono: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <Header />
        <Title text="Ingresa tu propio usuario" />
        <ItemUser user={this.state}/>
        <br />
        <UserForm onChange={this.handleChange} user={this.state}/>
        <Footer />
      </>
    );
  }
}

export default Form;
