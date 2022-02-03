import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search-bar';
import NewsList from './components/news-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar /> 
      </header>
      <NewsList />           
    </div>
  );
}

export default App;
