import React, { Component } from "react";
import Title from "./Title";
import ItemUser from "./ItemUser";
// import UserCount from "./UserCount";
import UserForm from "./UserForm";
import userList from "../data";
import { Button, Box, ButtonGroup, Switch } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../themeConfig";


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "Shalem",
      pais: "Colombia",
      email: "shalem@mail.com",
      telefono: "3014072140",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      < ThemeProvider theme={theme}>
        <ItemUser user={this.state}></ItemUser>
        <UserForm onChange={this.handleChange} user={this.state}></UserForm>
      </ThemeProvider>
    );
  }
}

export default App;
