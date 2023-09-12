import React, { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import ItemUser from "../components/ItemUser";
import Title from "../components/Title";
import {useParams} from "react-router-dom";
import axios from "axios";

console.log("Edit.jsx");
const Edit = () => {
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
  const {id} = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Title text="Edita un usuario" />
      <ItemUser user={userData} />
      <br />
      <UserForm onChange={handleChange} user={userData} isEdit/>
    </>
  );
};

export default Edit;
