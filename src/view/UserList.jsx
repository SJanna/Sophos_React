import React from "react";
import SingleUser from "../components/SingleUser";
import { CircularProgress, Box, Typography } from "@mui/material";
import Modal from "../components/Modal";

const UserList = ({users, loading, error}) => {
  return (
    <>
      {loading ? (
        <Box align="center" height="100%" sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
      <Box height="100%">
      {users.map((user) => (
        <SingleUser key={user.login.uuid} {...user} />
      ))}
      </Box>
  )}
      {error && <Typography>{error}</Typography>}
      {loading && <Modal/>}
    </>
  );
};

export default UserList;
