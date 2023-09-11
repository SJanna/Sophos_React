import React, { Component } from "react";
import Title from "./Title";
import ItemUser from "./ItemUser";
// import UserCount from "./UserCount";
import UserForm from "./UserForm";
import userList from "../data";
import { Button, Box, ButtonGroup, Switch } from "@mui/material";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: userList,
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
        <Title text="Lista de Usuarios" />
        {this.state.users.map((user, index) => (
          <ItemUser key={index} user={user} />
        ))}
        {/* <UserForm onChange={this.handleChange} user={this.state}/> */}
        <Box align="center">
          <Button color="secondary" variant="contained">
            Cargar más
          </Button>
        </Box>
        <Box align="center">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button color="primary">Anterior</Button>
            <Button color="primary">Siguiente</Button>
          </ButtonGroup>
          <Switch></Switch>
        </Box>
      </>
    );
  }
}

export default App;
