import Frame from "arwes/lib/Frame";
import React from "react";
import style from "./auth.module.css";
import { useState } from "react";
import { Footer, Button, Project, Image, Highlight } from "arwes";
import { Logo } from "arwes";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../features/users/userSlice";
import reducer from "./signup.reducer";
import useUsers from "../../hooks/useUsers";
import { Link, useNavigate } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
  confirm_password: "",
  authority_level: "user",
  age: 0,
  username: "",
  first_name: "",
  last_name: "",
};
export default function Signup() {
  const [reducerState, dispatchReducer] = React.useReducer(
    reducer,
    initialState
  );
  const navigate = useNavigate();
  const { signup } = useUsers();
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const handleSignUp = async () => {
    try {
      dispatchReducer({ type: "LOADING", payload: false });
      dispatchReducer({ type: "SUCCESS", payload: false });
      dispatchReducer({ type: "ERROR", payload: false });
      console.log("here");
      console.log(reducerState);
      dispatch(register(reducerState));
      console.log(reducerState);
      const res = await signup(reducerState);
      console.log(res);
      dispatchReducer({ type: "SUCCESS", data: reducerState });
      navigate("/articles");
    } catch (error) {
      if (error.response.status === 400) {
        dispatchReducer({
          type: "ERROR",
          payload: error.response.data.message,
        });
        console.log(reducerState);
      } else {
        dispatchReducer({ type: "ERROR", payload: "An error occurred" });
      }
    }
  };
  return (
    <div className={style.signUpContainer}>
      <div className={style.authContainer}>
        <h1>Sign Up</h1>
        <label htmlFor="">Username</label>
        <input
          onChange={(e) =>
            dispatchReducer({
              type: "UPDATE",
              value: e.target.value,
              key: "username",
            })
          }
          type="text"
          name="username"
          placeholder="Enter your username"
          className="inputControl"
        />
        <label htmlFor="">First Name</label>
        <input
          onChange={(e) =>
            dispatchReducer({
              type: "UPDATE",
              value: e.target.value,
              key: "first_name",
            })
          }
          type="text"
          name="first_name"
          placeholder="Enter your first name"
          className="inputControl"
        />
        <label htmlFor="">Last Name</label>
        <input
          onChange={(e) =>
            dispatchReducer({
              type: "UPDATE",
              value: e.target.value,
              key: e.target.name,
            })
          }
          type="text"
          placeholder="Enter your last name"
          className="inputControl"
          name="last_name"
        />
        <label htmlFor="">Email</label>
        <input
          onChange={(e) =>
            dispatchReducer({
              type: "UPDATE",
              value: e.target.value,
              key: e.target.name,
            })
          }
          type="text"
          placeholder="Enter your email"
          className="inputControl"
          name="email"
        />
        <label htmlFor="">Password</label>
        <input
          onChange={(e) =>
            dispatchReducer({
              type: "UPDATE",
              value: e.target.value,
              key: e.target.name,
            })
          }
          type="password"
          className="inputControl"
          placeholder="Enter your password"
          name="password"
        />

        {/* <label htmlFor="">Confirm Password</label>
        <input
          onChange={(e) =>
            dispatchReducer({
              type: "UPDATE",
              value: e.target.value,
              key: e.target.name,
            })
          }
          type="password"
          className="inputControl"
          placeholder="Confirm Password"
          name="password"
        /> */}
        <Button onClick={handleSignUp} className={style.signInButton}>
          Sign Up
        </Button>
        <Link
          to="/users/auth/login"
          style={{ color: "turquoise", marginTop: "12px" }}
        >
          Already have an account? Login
        </Link>
        <p>{reducerState.loading && "Loading..."}</p>
        <p>{reducerState.error && reducerState.error}</p>
        <p>{reducerState.data && "Success"}</p>
        <div className={style.errorContainer}></div>
      </div>
      <div className={style.logoContainer}>
        <Logo animate size={300} />
      </div>
    </div>
  );
}

// React.useEffect(() => {
//   const timeout = setTimeout(() => setActivate(!activate), 2000);
//   return () => clearTimeout(timeout);
// }, [activate]);
// const [activate, setActivate] = React.useState(true);
