import React from "react";
import Config from "../../Text Editor/Config";
import RichTextEditor from "../../Text Editor/RichTextEditor";
import { useState } from "react";
import style from "./articles.module.css";
import axios from "axios";
import { Button } from "arwes";
import useArticles from "../../hooks/useArticles";
import Uplaod from "../../Cloudinary/Uplaod";
export default function AddArticle() {
  const { submitArticle } = useArticles();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [img, setImg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  console.log(img);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(body);
    try {
      const res = await submitArticle({
        title,
        body,
        author_id: 4,
        image: img,
      });
      setSuccess(res.message);
    } catch (error) {
      console.log(error);
      setError("An Error Occured");
    }
  };
  return (
    <div className={style.formContainer}>
      <form className={style.container}>
        <h1>Add Article</h1>
        <label for="title">Title</label>
        <input
          className="inputControl"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
        />
        <label for="body">Body</label>
        <RichTextEditor setValue={setBody} configuration={Config} />
        <Button id={style.submitButton} type="submit" onClick={submitHandler}>
          Submit
        </Button>

        <Uplaod
          setImg={setImg}
          setPreviewSource={setPreviewSource}
          setSuccessMsg={setSuccessMsg}
          setErrMsg={setErrMsg}
        />
        {error ? (
          <p className={style.red}>{error}</p>
        ) : (
          <p className={style.green}>{success}</p>
        )}
      </form>
      <h1>Preview</h1>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
      <div className={style.preview}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    </div>
  );
}
