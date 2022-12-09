// import { useContext } from "react";
// import { AuthContext } from "./Context/AuthContext";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import UserProfile from "./Components/UserProfile/UserProfile";
import "./App.css";

function App() {
  // const { loggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
