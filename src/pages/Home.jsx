import React from "react";
import UserList from "../components/UserList";
import Title from "../components/Title";
import { Box, Typography } from "@mui/material";


const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin : "24px 8px",
    height: "100%",
}

const Home = () => {
  return (
    <Box sx={containerStyles}>
      <Title text="Bienvenido a User Random" />
      <UserList />
      <Typography variant="body2" align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, omnis
        rerum quam placeat delectus eius obcaecati modi quasi atque nam quos
        magni dolorem esse velit reprehenderit tenetur, doloremque molestiae?
        Perferendis?
      </Typography>
    </Box>
  );
};

export default Home;
