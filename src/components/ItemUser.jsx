import React, {useState} from "react";
import "./styles/ItemUser.css";
import { Card, CardContent, CardMedia, Typography, Button, Box, Modal, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemUser = (props) => {
  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/users/${props.user.id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  }


  const { id, nombre, pais, email, telefono } = props.user;
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "8px auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{
          flex: 1,
          maxWidth: 200,
          padding: "8px",
          
        }}
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        title="Imagen de usuario"
      />
      <CardContent sx={{ flex: 2 }}>
        <Typography variant="body1">
          <strong>Nombre: </strong> {nombre}
        </Typography>
        <Typography variant="body1">
          <strong>Pais: </strong> {pais}
        </Typography>
        <Typography variant="body1">
          <strong>Correo: </strong> {email}
        </Typography>
        {telefono && (
          <Typography variant="body1">
            <strong>Teléfono: </strong> {telefono}
          </Typography>
        )}
        <br />
        <Box sx={{display:'flex', justifyContent:'space-around' }}>
        {props.isEdit && <Button component={Link} to={`/edit/${id}`} variant="contained"> Editar </Button>}
        {props.isDelete && <Button component={Link} onClick={handleOpen} variant="contained"> Eliminar </Button>}
        </Box>
      </CardContent>
      <Modal open={open} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Paper sx={{display:"flex", flexDirection:'column', alignItems:'center', justifyContent:"space-evenly", height:"20%", width:"30%"}}>
          <Typography>¿Estás seguro de eliminar este usuario?</Typography>
          <Box sx={{display:'flex', justifyContent:'space-around', width:"50%" }}>
          <Button variant="contained"  onClick={handleDelete}>Si</Button>
          <Button variant="contained" onClick={()=>setOpen(false)}>No</Button>
          </Box>
        </Paper>
      </Modal>
    </Card>
  );
};
export default ItemUser;
