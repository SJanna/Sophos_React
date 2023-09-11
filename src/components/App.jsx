import React, { Component } from "react";
import Title from "./Title";
import ItemUser from "./ItemUser";
// import UserCount from "./UserCount";
import UserForm from "./UserForm";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pais: "",
      email: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
  })
  };

  render() {         
    return (
      <>
        <Title text="Lista de Usuarios" />
        <ItemUser user={this.state} enableButton={true}/>
        <UserForm onChange={this.handleChange} user={this.state}/>
      </>
    );
  }
}

export default App;
