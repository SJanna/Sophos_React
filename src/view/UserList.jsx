import React from "react";
import SingleUser from "../components/SingleUser";
import { CircularProgress, Box, Typography } from "@mui/material";

const UserList = ({users, loading, error}) => {
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
