import React, { Component } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../themeConfig";
import Home from "../pages/Home";
import Form from "../pages/Form";

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    );
  }
}

export default App;

