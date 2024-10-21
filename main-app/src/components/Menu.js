import React from "react";

const Menu = ({ menu, setMenu }) => {
  return (
    <div>
      <input
        type="radio"
        name="menu"
        id="users"
        value="users"
        checked={menu === "users"}
        onChange={(e) => setMenu(e.target.value)}
      />
      <label htmlFor="users">Users List</label>

      <input
        type="radio"
        name="menu"
        id="weather"
        value="weather"
        checked={menu === "weather"}
        onChange={(e) => setMenu(e.target.value)}
      />
      <label htmlFor="weather">Weather Info</label>
    </div>
  );
};

export default Menu;
