import React, { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1>Users list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age} years old</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
