import React, { Component } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../themeConfig";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Layout from "../layout/Layout";
import List from "../pages/List";

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
        <Form/>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;

