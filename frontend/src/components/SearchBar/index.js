import React from 'react';
import './styles.css';

const SearchBar = (props) => {

    return (
        <div className='search-section'>
            <div className='search-bar'>
                <input className='search-text' placeholder="Search" value={ props.query } onChange={props.handleChange}></input>
            </div>
        </div>
    )
}

export default SearchBar;