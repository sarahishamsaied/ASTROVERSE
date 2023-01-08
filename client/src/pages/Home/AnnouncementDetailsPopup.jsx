import { Button } from "arwes";
import React, { useState } from "react";
import style from "./home.module.css";
export default function AnnouncementDetailsPopup({
  announcement,
  setShowPopup,
}) {
  console.log(announcement);
  console.log(announcement.comments);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(
    announcement.comments ? announcement.comments : []
  );
  const getComments = async () => {
    const response = await fetch(
      `http://localhost:8282/api/comments/${announcement.id}`
    );
    const data = await response.json();
    console.log(data);
    setComments(data);
  };
  const handlePostComment = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8282/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment_body: comment,
        announcement_id: announcement.id,
        comment_author_id: 1,
      }),
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setMessage("Posted Successfully");
    await getComments();
  };
  return (
    <section className={style.popupContainer}>
      <div className={style.announcementDetails}>
        <button
          className={style.exitButton}
          onClick={() => setShowPopup(false)}
        >
          x
        </button>
        <p className={style.username}>
          {announcement.first_name} {announcement.last_name}
        </p>
        <h1 style={{ fontSize: "3.4rem" }}>{announcement.title}</h1>
        <p>{announcement.body}</p>
        <p>Comments:</p>
        <div className={style.comments}>
          {comments.length === 0 ? (
            <p>No comments yet</p>
          ) : (
            comments.map((comment) => {
              return (
                <div className={style.commentBody} key={comment.id}>
                  {comment.user && (
                    <b className={style.username}>
                      {comment.user.first_name} {comment.user.last_name}
                    </b>
                  )}
                  <p> {comment.comment_body}</p>
                  <small>{comment.createdAt}</small>
                </div>
              );
            })
          )}
        </div>
        <h3>Type your comment here</h3>
        <input
          type="text"
          className={`inputControl ${style.commentInput}`}
          placeholder="Enter your comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={handlePostComment}>Post Comment</Button>
        {loading && <p>Loading...</p>}
      </div>
    </section>
  );
}
