import { lazy, Suspense } from "react";
import React, { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

const UsersList = lazy(() => import("UsersList/UsersList"));
const WeatherInfo = lazy(() => import("WeatherInfo/WeatherInfo"));

function App() {
  const [menu, setMenu] = useState("");
  return (
    <div className="App">
      <Menu menu={menu} setMenu={setMenu} />
      <Suspense fallback={<div>Loading...</div>}>
        {!menu && <div>Choose page</div>}
        {menu === "users" && <UsersList />}
        {menu === "weather" && <WeatherInfo />}
      </Suspense>
    </div>
  );
}

export default App;
