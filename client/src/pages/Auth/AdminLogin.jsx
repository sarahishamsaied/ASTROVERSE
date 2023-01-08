import { Button, Frame } from "arwes";
import React from "react";
import Centered from "../../components/Centered";
import useAdmins from "../../hooks/useAdmins";

export default function AdminLogin() {
  const { adminLogin } = useAdmins();
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    const res = "";
    try {
      e.preventDefault();
      setMessage("Loading");
      const res = await adminLogin({ email, password });
      console.log(res);
      setMessage("Logged in");
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.message);
        setMessage(error.response.data.message);
      }
    }
  };
  return (
    <section
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/img/hitech.jpg" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          padding: "30px",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="">Login ID</label>
        <input
          style={{ marginBottom: "20px" }}
          className="inputControl"
          type="text"
          name="loginId"
          id="loginId"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Login ID"
        />
        <label htmlFor="">Login ID</label>
        <input
          className="inputControl"
          type="password"
          name="loginId"
          id="loginId"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Login password"
        />
        <Button style={{ marginTop: "20px" }} onClick={handleSubmit}>
          Login
        </Button>
        <p>{message}</p>
      </div>
    </section>
  );
}
