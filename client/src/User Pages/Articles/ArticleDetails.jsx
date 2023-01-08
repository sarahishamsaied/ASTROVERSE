import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./articles.data";
import style from "./articles.module.css";
export default function ArticleDetails(props) {
  const { id } = useParams();
  //   const [details, setDetails] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const setData = async () => {
    const res = await props.getArticle(id);
    console.log(res);
    console.log(res.image);
    setTitle(res.title);
    setBody(res.body);
    const author = await props.getUser(res.author_id);
    console.log(author);
    setAuthor(`${author.first_name} ${author.last_name}`);
    setCategory(res.category);
    setPublishDate(res.createdAt);
    setImgUrl(res.image);
  };
  useEffect(() => {
    setData();
  }, []);
  return (
    <section className={style.articleDetails}>
      <div
        style={{ backgroundImage: `url("${imgUrl}")` }}
        className={style.backgroundImg}
      ></div>
      <div className={style.articleContent}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
        {/* <p>{body}</p> */}
        <p>
          Category: <span>{category}</span>
        </p>
        <p>
          Author: <span>{author}</span>
        </p>
        <p>
          Publish Date: <span>{publishDate}</span>{" "}
        </p>
      </div>
    </section>
  );
}
