import React, { useEffect, useState } from "react";
import Title from "../components/Title.jsx";
import ItemUser from "../components/ItemUser";
import axios from "axios";

const List = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title text="Lista de usuarios" />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} />
      ))}
    </>
  );
};

export default List;
