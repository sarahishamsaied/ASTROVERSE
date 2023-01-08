import { Button } from "arwes";
import React from "react";
import useAdmins from "../../../hooks/useAdmins";

export default function AssignRoles() {
  const { assignRole } = useAdmins();
  const [searchValue, setSearchValue] = React.useState("");
  const [role, setRole] = React.useState("admin");
  const [message, setMessage] = React.useState("");
  const handleSubmit = async () => {
    setMessage("");
    try {
      await assignRole({ id: searchValue, authority_level: role });
      setMessage("Assigned");
    } catch (error) {
      console.log();
      setMessage(error.response.data);
    }
  };
  return (
    <div>
      <h1>Assign Roles</h1>
      <input
        type="text"
        className="inputControl"
        placeholder="Enter User ID"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select
        name=""
        id=""
        className="inputControl"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="user">Astronaut</option>
      </select>
      <Button onClick={handleSubmit}>Assign</Button>
      <p>{message}</p>
    </div>
  );
}
