import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../themeConfig";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Layout from "../layout/Layout";
import List from "../pages/List";
import User from "../pages/User";
import UserCountHook from "./UserCountHook";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="list" element={<List />} />
          <Route path="user/:id" element={<User />} />
        </Route>
        <Route path="usercounter" element={<UserCountHook />} />
      </Routes>
    </ThemeProvider>
  );
}
