import { Button } from "arwes";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ManageAccount() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const handleUpdate = async () => {
    const res = await axios.put("https://localhost:8282/users");
  };
  return (
    <section>
      <div
        style={{
          width: "80vw",
          backgroundColor: "rgba(0, 0, 0, 0.207)",
          borderBottom: "1px solid rgb(0, 238, 206)",
          marginRight: "10px",
          padding: "50px",
          boxShadow: "0 0 18px black",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <h1 style={{ width: "100%" }}>Manage Account</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "40px",
          }}
        >
          <label style={{ marginBottom: "10px" }}>First Name: </label>
          <label style={{ marginBottom: "10px" }}>Last Name: </label>
          <label style={{ marginBottom: "10px" }}>New Password: </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder={user.first_name}
            className="inputControl"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder={user.last_name}
            className="inputControl"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="password"
            placeholder={"Enter new password"}
            className="inputControl"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button
        style={{
          marginLeft: "auto",
          display: "block",
          width: "124px",
          marginRight: "30px",
          marginTop: "10px",
        }}
      >
        Update Info
      </Button>
      <Button
        style={{
          marginLeft: "auto",
          display: "block",
          width: "124px",
          marginRight: "30px",
          marginTop: "10px",
        }}
      >
        Delete Account
      </Button>
    </section>
  );
}
