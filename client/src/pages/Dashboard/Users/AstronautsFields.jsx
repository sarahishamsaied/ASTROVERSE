import { Button } from "arwes";
import React from "react";
import roles from "./roles";
export default function AstronautsFields({ setRole, role, dispatch }) {
  const [loginId, setLoginId] = React.useState("");
  const handleLoginId = () => {
    setLoginId(
      `AS-${Date.now()}${Math.random()}${role ? role[0] : "".toUpperCase()}`
    );
  };
  return (
    <div>
      <div className="row">
        <label htmlFor="">LOGIN ID</label>
        <p style={{ fontSize: "smaller" }}>{loginId}</p>
        <Button onClick={handleLoginId}>Generate Login ID</Button>
      </div>
      <div className="row">
        <label htmlFor="">SALARY</label>
        <input
          type="number"
          className="inputControl"
          placeholder="Enter Salary"
          onChange={(e) =>
            dispatch({ type: "UPDATE", value: e.target.value, key: "salary" })
          }
        />
      </div>
      <div className="row">
        <label htmlFor="">YEARS OF EXP.</label>
        <input
          type="number"
          className="inputControl"
          placeholder="Enter Years of Experience"
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "years_of_experience",
            })
          }
        />
      </div>
      <div className="row">
        <label>Role</label>
        <select
          name=""
          id=""
          className="inputControl"
          onChange={(e) =>
            dispatch({ type: "UPDATE", value: e.target.value, key: "role" })
          }
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option value={role}>{role}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
