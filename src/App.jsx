import "./App.css";
import SearchBar from "./components/search-bar";
import NewsList from "./components/news-list";
import Axios from "axios";
import React, { useState } from "react";

function App() {
  const [newsData, setNewsData] = useState(null);

  const performSearch = (url) => {
    try {
      Axios.get(url)
        .then((resp) => {
          console.log(resp);
          return resp.data;
        })
        .then((js) => {
          console.log(js);
          return js;
        })
        .then((js) => setNewsData(js))
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  };

  const onSearch = (searchExpr) => {
    //    Axios.get("http://localhost:3000/hits")
    const url = `http://hn.algolia.com/api/v1/search?query=${searchExpr}&hitsPerPage=30`;
    console.log("onSearch: " + url);
    performSearch(url);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar searchFunc={onSearch} />
      </header>
      {!newsData ? (
        <p>Nothing to display. Enter search expression.</p>
      ) : (
        <NewsList data={newsData} />
      )}
    </div>
  );
}

export default App;
