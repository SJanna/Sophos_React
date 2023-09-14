import React, { useEffect, useState } from "react";
import axios from "axios";
import UserListView from "../view/UserList";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );
        //apend users
        setUsers([...users, ...response.data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <UserListView onLoad={handleLoadMore} users={users} loading={loading} error={error}/>
  );
};

export default UserList;
