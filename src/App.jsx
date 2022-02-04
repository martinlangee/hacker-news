import "./App.css";
import SearchBar from "./components/search-bar";
import NewsList from "./components/news-list";
import Axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [newsData, setNewsData] = useState(null);


  useEffect(() => {
    console.log("###################");
    //    Axios.get("http://localhost:3000/hits")
    Axios.get("https://hn.algolia.com/api/v1/search?query=React%20app&page=5&hitsPerPage=50")
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
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      {!newsData ? <p>Loading issues ...</p> : <NewsList data={newsData} />}
    </div>
  );
}

export default App;
