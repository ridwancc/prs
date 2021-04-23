import SearchBar from '../SearchBar'
import Menu from '../Menu'
import ResultsContainer from '../ResultsContainer';
import FetchPlates from '../api';
import SubmitSearch from '../SearchBar/SubmitSearch';

const SearchPage = () => {
    const { data, loading, error } = FetchPlates();
    const { query, handleChange } = SubmitSearch();

    return (
        <div>
            <Menu/>
            <SearchBar query={query} handleChange={handleChange}/>
            <ResultsContainer loading={loading} error={error} data={data} query={query}/>
        </div>
    )
}

export default SearchPage;