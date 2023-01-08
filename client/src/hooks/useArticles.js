import React, { useState, useCallback, useEffect } from "react";
import {
  httpGetAllArticles,
  httpPostArticle,
  httpGetArticleById,
} from "./requests";

export default function useArticles() {
  const [articles, saveArticles] = useState([]);
  const [article, saveArticle] = useState({});
  const getArticles = useCallback(async () => {
    const fetchedArticles = await httpGetAllArticles();
    console.log(fetchedArticles);
    saveArticles(fetchedArticles);
  }, []);
  const submitArticle = useCallback(async (article) => {
    const response = await httpPostArticle(article);
    return response;
  }, []);
  const getArticle = useCallback(async (id) => {
    const fetchedArticle = await httpGetArticleById(id);
    console.log(fetchedArticle);
    saveArticle(fetchedArticle);
    return fetchedArticle;
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);
  return { articles, submitArticle, getArticle, article };
}
