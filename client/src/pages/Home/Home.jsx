import {
  Blockquote,
  Button,
  Frame,
  Header,
  Heading,
  withStyles,
  Words,
} from "arwes";
import * as AiIcons from "react-icons/ai";
import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import io from "socket.io-client";
import useAnnouncements from "../../hooks/useAnnouncements";
import Announcement from "./Announcement";
import PostAnnouncement from "./PostAnnouncement";
const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      flexDirection: "column",
      border: "1px solid #fff",
      padding: "1rem",
    },
  };
};
// const socket = io.connect("http://localhost:8282");
const Home = withStyles(styles)(({ classes, children }) => {
  const { announcements } = useAnnouncements();
  const [fetchedAnnouncements, setFetchedAnnouncements] =
    useState(announcements);
  console.log(announcements);
  return (
    <div className={style.root}>
      <h3>
        <Blockquote>
          <Heading>
            <AiIcons.AiFillWarning
              style={{ paddingTop: "8px", marginRight: "9px", color: "yellow" }}
            />
            <Words animate>Announcements</Words>
          </Heading>
        </Blockquote>
      </h3>
      <PostAnnouncement setFetchedAnnouncements={setFetchedAnnouncements} />

      {announcements.map((announcement) => {
        return <Announcement announcement={announcement} />;
      })}
    </div>
  );
});

export default Home;
