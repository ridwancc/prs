import React from 'react';
import './styles.css';
import BuyButton  from '../Buy/BuyButton';

const SearchResult = (props) => {
    const saleStatus = props.status;

    return (
        <div className='search-result'>
            <div className='number-plate' id={`number-plate-id-${props.id}`}>
                <p id="vrm">{props.vrm}</p>
            </div>
            <div className="details">
                <p id='price'>£{props.price}</p>
                { saleStatus === 'available' ? 
                    <BuyButton id={props.id} vrm={props.vrm} price={props.price} status={props.status}/> : 
                    <p id='sale-status'>{props.status}</p> 
                }
            </div>
        </div>
    )
}

export default SearchResult;