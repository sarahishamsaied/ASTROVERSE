import { Button, Frame } from "arwes";
import React from "react";
import AnnouncementDetailsPopup from "./AnnouncementDetailsPopup";
import style from "./home.module.css";
export default function Announcement({ announcement }) {
  const [showPopup, setShowPopup] = React.useState(false);
  const handleDetailsPopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <section className={style.announcement}>
      <p>
        {announcement.first_name} {announcement.last_name}
      </p>
      <h2>{announcement.title}</h2>
      <p>{announcement.body}</p>
      <div className={style.footer}>
        <Button onClick={handleDetailsPopup}>Comment</Button>
        <span>{announcement.createdAt}</span>
      </div>
      {showPopup && (
        <AnnouncementDetailsPopup
          announcement={announcement}
          setShowPopup={setShowPopup}
        />
      )}
    </section>
  );
}
