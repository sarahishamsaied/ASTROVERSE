import { Button } from "arwes";
import React from "react";
import AstronautsFields from "./AstronautsFields";
import reducer from "./reducer";
import useAdmins from "../../../hooks/useAdmins";
import useUsers from "../../../hooks/useUsers";
import { useSelector } from "react-redux";
const initialRegularUserState = {
  authority_level: "user",
  username: "",
  email: "",
  password: "",
  role: "",
  first_name: "",
  last_name: "",
};
const initialAstronautState = {
  ...initialRegularUserState,
  authority_level: "astronaut",
  loginId: "",
  salary: "",
  yearsOfExperience: "",
  role: "Pilot",
};
export default function AddUser() {
  const [authorityLevel, setAuthorityLevel] = React.useState("user");
  const { signup } = useUsers();
  const { addNewAstronaut } = useAdmins();
  const [role, setRole] = React.useState("admin");
  const user = useSelector((state) => state.user);
  console.log(user);
  const [reducerState, dispatch] = React.useReducer(
    reducer,
    authorityLevel === "astronaut"
      ? initialAstronautState
      : initialRegularUserState
  );
  const handleSubmit = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      if (authorityLevel === "astronaut") {
        const res = await addNewAstronaut(reducerState);
        dispatch({ type: "SUCCESS", data: res });
        console.log(res);
      } else {
        const res = await signup(reducerState);
        console.log(res);
      }
    } catch (error) {
      let err = error.response.status;
      if (err === 400) {
        dispatch({ type: "ERROR", payload: "Email already exists" });
        console.log(reducerState);
      } else {
        dispatch({ type: "ERROR", payload: "Something went wrong" });
      }
    }
  };

  return (
    <div>
      <h1>Add {authorityLevel}</h1>
      <div className="row">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          className="inputControl"
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "first_name",
            })
          }
        />
      </div>
      <div className="row">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="inputControl"
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "last_name",
            })
          }
        />
      </div>
      <div>
        <label htmlFor=""></label>
        {authorityLevel === "astronaut" ? (
          <AstronautsFields setRole={setRole} role={role} dispatch={dispatch} />
        ) : (
          <div className="row">
            <label htmlFor="">User Name</label>
            <input
              type={"text"}
              className="inputControl"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "username",
                })
              }
            />
          </div>
        )}
      </div>
      <div className="row">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter User Email"
          className="inputControl"
          onChange={(e) =>
            dispatch({ type: "UPDATE", value: e.target.value, key: "email" })
          }
        />
      </div>
      <div className="row">
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter User Password"
          className="inputControl"
          onChange={(e) =>
            dispatch({ type: "UPDATE", value: e.target.value, key: "password" })
          }
        />
      </div>
      <div className="row">
        <label htmlFor="">Authority Level</label>
        <select
          type="text"
          placeholder="Enter Authority Level"
          onChange={(e) => {
            setAuthorityLevel(e.target.value);
            return dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "authority_level",
            });
          }}
          className="inputControl"
        >
          <option value="">Select Authority Level</option>
          <option value="user">User</option>
          <option value="astronaut">Astronaut</option>
        </select>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
      {reducerState.loading && (
        <p style={{ fontSize: "20px", padding: "20px 0" }}>Loading...</p>
      )}
      {reducerState.error && (
        <p style={{ color: "red", fontSize: "20px", padding: "20px 0" }}>
          {reducerState.error}
        </p>
      )}
      {reducerState.data && (
        <p style={{ fontSize: "20px", padding: "20px 0" }}>
          {authorityLevel} added successfully
        </p>
      )}
    </div>
  );
}
