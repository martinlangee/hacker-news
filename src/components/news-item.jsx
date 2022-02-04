import React, { useState } from "react";
import "../App.css";



const NewsItem = ({ data }) => {
  const [trimDate, setTrimDate] = useState('');
  
  const trim = (e) => (e.substring(0,9))

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
