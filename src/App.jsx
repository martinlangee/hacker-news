import './App.css';
import SearchBar from './components/search-bar';
import NewsList from './components/news-list';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [newsData, setNewsData] = useState(null);
    useEffect(() => {
      Axios.get('http://localhost:3000/hits')
        .then(resp => {
        const data = resp.data;
        // console.log(data);
        setNewsData({data})
         })
         .then(() => console.log(newsData))
        .catch(error => {
        console.log(error);
    })}, [] 
    );
    
          
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar /> 
      </header>
      <NewsList 
      data={newsData}/>           
    </div>
  );
}



export default App
