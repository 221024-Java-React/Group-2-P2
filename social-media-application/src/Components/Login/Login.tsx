import { useNavigate } from "react-router";

import { axInst } from "../../Util/axInst";

import Navigation from "../Navigation/Navigation";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const loginHandler = (event: any) => {
    event.preventDefault();

    axInst
      .post("login", {
        email: event.target[0].value,
        password: event.target[1].value,
      })
      .then(response => {
        document.cookie = `SESSION=${response.data}`;
        return navigate("/");
      });
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
