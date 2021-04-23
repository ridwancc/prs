import React from 'react';
import './styles.css';
import SearchResult from '../SearchResult';

const ResultsContainer = (props) => {

    return (
        <div className='results-section'>
            <div className="results-container">

            {(() => {
                if (props.loading) {
                    return (
                    <div>Loading...</div>
                    )
                } else if (props.error) {
                    return (
                    <div>Error!</div>
                    )
                } else {
                    const filteredResults = filterResults(props.data, props.query);
                    return (
                    filteredResults.map((val, key) => {
                        return <SearchResult id={val.plateid} vrm={val.vrm} price={val.price} status={val.status} key={key}/>
                    })
                )
                }
            })()}

            </div>
        </div>
    )
}

const filterResults = (data, query) => {
    const filteredResults = [];
    for (let item of data){
      if (item.vrm.includes(query.toLowerCase())){
        filteredResults.push(item);
      }
    }
    return filteredResults;
  }; 

export default ResultsContainer;