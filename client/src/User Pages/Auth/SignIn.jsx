import Frame from "arwes/lib/Frame";
import React from "react";
import style from "./auth.module.css";
import { Footer, Button, Project, Image } from "arwes";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
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
      console.log(res);
      setMessage("Logged in successfully");
    } catch (error) {
      console.log(error.response.status);
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
        <p>{message}</p>
      </div>
    </div>
  );
}
