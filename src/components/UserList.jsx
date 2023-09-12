import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
import { CircularProgress, Box, Typography } from "@mui/material";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        setUsers(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  console.log("users----------------------------", users);
  return (
    <div>
      {loading && (
        <Box align="center" height="100%" sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {error && <Typography>{error}</Typography>}
      {users.map((user) => (
        <SingleUser key={user.login.uuid} {...user} />
      ))}
    </div>
  );
};

export default UserList;
