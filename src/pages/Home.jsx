import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemUser from "../components/ItemUser";
import Title from "../components/Title";
import { Box, Container, Typography } from "@mui/material";

const data = {
  nombre: "Shalem",
  pais: "Colombia",
  email: "shalem@mail.com",
  telefono: "3014072140",
};

const headerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    }

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin : "24px 8px",
    height: "100%",
}

const Home = () => {
  return (
    <Box sx={headerStyles}>
      <Header />
      <Container maxWidth="md" sx={containerStyles}>
      <Title text="Bienvenido a User Random" />
      <ItemUser user={data} />
      <Typography variant="body2" align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, omnis
        rerum quam placeat delectus eius obcaecati modi quasi atque nam quos
        magni dolorem esse velit reprehenderit tenetur, doloremque molestiae?
        Perferendis?
      </Typography>
        </Container>
      <Footer />
    </Box>
  );
};

export default Home;
