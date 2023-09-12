import React, { useState } from "react";
import UserForm from "../components/UserForm";
import ItemUser from "../components/ItemUser";
import Title from "../components/Title";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    pais: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title text="Ingresa tu propio usuario" />
      <ItemUser user={userData} />
      <br />
      <UserForm onChange={handleChange} user={userData} />
    </>
  );
};

export default Form;
