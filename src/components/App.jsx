import React, { Component } from "react";
import Title from "./Title";
import ItemUser from "./ItemUser";
// import UserCount from "./UserCount";
import UserForm from "./UserForm";
import userList from "../data";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users:userList,
    }
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
        {this.state.users.map((user, index) => (
          <ItemUser key={index} user={user}/>
        ))}
        <UserForm onChange={this.handleChange} user={this.state}/>
      </>
    );
  }
}

export default App;
