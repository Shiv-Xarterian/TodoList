import Home from "./Screens/Home";
import Login from "./Screens/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Screens/Register";

import React from "react";
import Todo from "./Screens/Todo";
import Profile from "./Screens/Profile";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/todo" element={<Todo />} />
        <Route path="/home/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
