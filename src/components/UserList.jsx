import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://randomuser.me/api/?results=10");
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
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {users.map((user) => (
        <div key={user.login.uuid}>
          <img src={user.picture.medium} alt={user.name.first} />
          <p>{user.name.first}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
