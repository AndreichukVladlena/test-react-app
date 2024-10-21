import { lazy, Suspense } from "react";
import React, { useState } from "react";
import "./App.css";

const UsersList = lazy(() => import("UsersList/UsersList"));
const WeatherInfo = lazy(() => import("WeatherInfo/WeatherInfo"));

function App() {
  const [menu, setMenu] = useState("");
  return (
    <div className="App">
      <div className="container">This is my home page</div>
    </div>
  );
}

export default App;
