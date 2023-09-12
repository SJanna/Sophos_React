import { Container, Link, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";



const Footer = () => {
const theme = useTheme();

const footerStyles = {
  width: "100%",
  padding: "24px 0",
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  bottom: 0,
};
  return (
    <footer style={footerStyles}>
      <Container maxWidth="md">
        <Grid container align="scenter">
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">
              <strong>Politivas del sitio</strong>
            </Typography>
            <br />
            <Link>
              <Typography variant="body1">Politicas de privacidad</Typography>
            </Link>
            <Link>
              <Typography variant="body1">Terminos y condiciones</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">
              <strong>Servicios</strong>
            </Typography>
            <br />
            <Link>
              <Typography variant="body1">Soporte</Typography>
            </Link>
            <Link>
              <Typography variant="body1">Preguntas frecuentes</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">
              <strong>Contáctanos</strong>
            </Typography>
            <br />
            <Link>
              <Typography variant="body1">3014072123</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
