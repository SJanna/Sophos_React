import React from "react";
import ItemUser from "../components/ItemUser";
import { useParams } from "react-router-dom";
import userList from "../data";
import { Box } from "@mui/material";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "24px 8px",
  height: "70vh",
};

const User = () => {
  console.log(useParams());
  const { id } = useParams();
  const singleUser = userList.find((user) => user.id === id);
  console.log(singleUser);

  return (
    <Box sx={containerStyles}>
      <ItemUser user={singleUser} />
    </Box>
  );
};

export default User;
