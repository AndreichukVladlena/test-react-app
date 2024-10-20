import React, { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <>
      <h1>Users list</h1>
      <input
        type="text"
        placeholder="search by users name..."
        value={searchFilter}
        onChange={(e) => {
          setSearchFilter(e.target.value);
        }}
      />

      <ul>
        {filteredUsers.map((user) => (
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
