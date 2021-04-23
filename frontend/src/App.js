import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Menu from './components/Menu'
import ResultsContainer from './components/ResultsContainer';
import { FetchPlates } from './components/api';
import SubmitSearch from './components/SearchBar/SubmitSearch';


function App() {
  const { data, loading, error } = FetchPlates();
  const { query, handleChange } = SubmitSearch();

  return (
    <div className="App">
      <Header/>
      <Menu/>
      <SearchBar query={query} handleChange={handleChange}/>
      <ResultsContainer loading={loading} error={error} data={data} query={query}/>
    </div>
  );
}

export default App;
