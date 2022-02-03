import './App.css';
import SearchBar from './components/search-bar';
import NewsList from './components/news-list';
import Axios from 'axios';
import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
      Axios.get('http://localhost:3000/hits')
        .then(resp => {
        const data = resp.data;
        console.log(data);
         })
        .catch(error => {
        console.log(error);
    })}, [] 
    );

          
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar /> 
      </header>
      <NewsList />           
    </div>
  );
}



export default App
