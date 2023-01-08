import React, { useEffect } from "react";
import Article from "./Article";
import style from "./articles.module.css";
import articles from "./articles.data";
export default function Articles(props) {
  console.log(props.articles);
  return (
    <div>
      <h1 className={style.title}>Articles</h1>
      <div className={style.articles}>
        {props.articles.map((element) => (
          <Article
            id={element.id}
            title={element.title}
            imgUrl={element.image}
            body={element.body}
            author={element.author}
            category={element.category}
            publish_date={element.publish_date}
          />
        ))}
      </div>
    </div>
  );
}
