import Frame from "arwes/lib/Frame";
import React from "react";
import style from "./auth.module.css";
import { Footer, Button, Project, Image } from "arwes";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const handleSubmit = async () => {
    console.log("here");
    try {
      const res = await axios.post(
        "http://localhost:8282/api/users/auth/signin",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = res.data.token;
      const decoded = jwt_decode(token);
      console.log("decoded", decoded);
      console.log(decoded);
      const userDecoded = {
        isAuthenticated: true,
        authority_level: decoded.user.authority_level,
        email: decoded.user.email,
        first_name: decoded.user.first_name,
        last_name: decoded.user.last_name,
        token: token,
      };
      console.log(userDecoded);
      dispatch({ type: "SUCCESS", payload: userDecoded });
      console.log(user);
      setMessage("Logged in successfully");
      navigate("/articles");
    } catch (error) {
      console.log(error);
      setMessage("An error occurred");
    }
  };
  return (
    <div className={style.signInContainer}>
      <div className={style.authContainer}>
        <h1>Sign In</h1>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="inputControl"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="inputControl"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className={style.signInButton} onClick={handleSubmit}>
          Sign In
        </Button>
        <Link
          to="/users/auth/register"
          style={{ color: "turquoise", marginTop: "12px" }}
        >
          Don't have an account? Sign Up
        </Link>
        <p>{message}</p>
      </div>
    </div>
  );
}
