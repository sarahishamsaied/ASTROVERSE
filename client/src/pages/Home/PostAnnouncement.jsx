import React, { useState } from "react";
import { Text } from "@arwes/core";
import { Button, Footer } from "arwes";
import style from "./home.module.css";
import useAnnouncements from "../../hooks/useAnnouncements";
export default function PostAnnouncement({ setFetchedAnnouncements }) {
  const [activate, setActivate] = React.useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const { getAnnouncements } = useAnnouncements();
  const handlePost = async () => {
    try {
      const res = await fetch("http://localhost:8282/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          author_id: 1,
        }),
      });
      const data = await res.json();
      setMessage(data.message);
      const updated = await getAnnouncements();
      setFetchedAnnouncements(updated);
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
    }
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);
  return (
    <div>
      <div animator={{ activate }} hover>
        <h1>Post an announcement</h1>
        <div>
          <h4>Title</h4>
          <input
            style={{ width: "100%", marginBottom: "10px" }}
            type="text"
            className="inputControl"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <h4>Body</h4>
          <textarea
            type={"text"}
            className="inputControl"
            rows={10}
            cols={100}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
      </div>
      <Button onClick={handlePost}>Post</Button>
      <Text>{message}</Text>
    </div>
  );
}
