import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./articles.module.css";
export default function Article({
  id,
  title,
  body,
  imgUrl,
  category,
  publish_date,
  author,
}) {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url("${imgUrl}")` }}
      className={style.article}
    >
      <div className={style.content}>
        <p>{publish_date}</p>
        <h1>{title}</h1>
        <p>
          -{author} {category}
        </p>
        <div dangerouslySetInnerHTML={{ __html: body.slice(0, 100) }}></div>
        <button
          className={style.articleDetailsButton}
          onClick={() => navigate("/articleDetails/" + id)}
        >
          Details
        </button>
      </div>
    </div>
  );
}
