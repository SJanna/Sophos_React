import React, { useEffect, useState } from "react";
import axios from "axios";
import UserListView from "../view/UserList";

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

  return (
    <UserListView users={users} loading={loading} error={error}/>
  );
};

export default UserList;
