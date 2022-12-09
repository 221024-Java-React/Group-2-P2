import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

import Navigation from "../Navigation/Navigation";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useContext(AuthContext);

  const emailChangeHandler = (event: any) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: any) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event: any) => {
    event.preventDefault();

    login(email, password);
  };

  return (
    <>
      <Navigation />
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={emailChangeHandler}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
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
