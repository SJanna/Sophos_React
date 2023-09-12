import React from "react";
import userList from "../data.js";
import Title from "../components/Title.jsx";
import ItemUser from "../components/ItemUser";

const List = () => {
  const users = userList;

    return(
      <>
      <Title text="Lista de usuarios"/>
      {users.map((item, index) => (
        <ItemUser key={index} user={item}/>
      ))}
      </>
    )
  }

export default List;
