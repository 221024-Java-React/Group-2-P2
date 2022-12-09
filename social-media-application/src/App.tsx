import { useContext, useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import UserProfile from "./Components/UserProfile/UserProfile";
import "./App.css";

function App() {
  const { loggedIn, verifyUser } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) {
      verifyUser();
    }
  }, []);

  return (
    <Routes>
      {loggedIn && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </>
      )}
      {!loggedIn && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
