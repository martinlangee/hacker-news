import React from "react";
import "../App.css";

const NewsItem = ({ data }) => {
  return (
  <div className="news-item">
    <h3 className="news-title">{data.title}</h3>
    <label type="date" className="news-date">{data.created_at}</label>
    <p className="news-author">Author: {data.author}</p>
    <a href={data.url}>Read article</a>
    
  </div>)
  ;
};

export default NewsItem;
