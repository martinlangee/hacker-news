import React from "react";
import NewsItem from "./news-item";

const NewsList = ({ data }) => {
  return (
    <div>
      {data.hits.map((item) => (
        <NewsItem data={item} key={item.objectID} />
      ))}
    </div>
  );
};

export default NewsList;
