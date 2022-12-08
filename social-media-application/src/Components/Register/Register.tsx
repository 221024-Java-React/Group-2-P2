import { useNavigate } from "react-router";

import { axInst } from "../../Util/axInst";

import Navigation from "../Navigation/Navigation";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const registerHandler = async (event: any) => {
    event.preventDefault();

    try {
      await axInst.post("/users/register", {
        profileName: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
      });

      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navigation />
      <form className="reg-form" onSubmit={registerHandler}>
        <h1>Register</h1>
        <input type="text" name="profileName" placeholder="Profile Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
        <div className="member">
          <h4>Already A Member?</h4>
          <a href="/login">Login</a>
        </div>
      </form>
    </>
  );
};

export default Register;
