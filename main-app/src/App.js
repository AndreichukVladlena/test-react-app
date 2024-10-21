import { lazy, Suspense } from "react";
import React, { useState } from "react";
import "./App.css";

const UsersList = lazy(() => import("UsersList/UsersList"));
const WeatherInfo = lazy(() => import("WeatherInfo/WeatherInfo"));

function App() {
  const [menu, setMenu] = useState("");
  return (
    <div className="App">
      <div>
        <input
          type="radio"
          name="menu"
          id="users"
          value="users"
          onClick={(e) => setMenu(e.target.value)}
        />
        <label htmlFor="users">Users List</label>
        <input
          type="radio"
          name="menu"
          id="weather"
          value="weather"
          onClick={(e) => setMenu(e.target.value)}
        />
        <label htmlFor="weather">Weather Info</label>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {!menu && <div>Choose page</div>}
        {menu === "users" && <UsersList />}
        {menu === "weather" && <WeatherInfo />}
      </Suspense>
    </div>
  );
}

export default App;
