import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

import Navigation from "../Navigation/Navigation";
import "./Login.css";

const Login = () => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const { login } = useContext(AuthContext);

  const loginHandler = (event: any) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    login(email, password);
  };

  return (
    <>
      <Navigation />
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <div className="member">
          <h4>Not A Member?</h4>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default Login;
