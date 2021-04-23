import React from 'react';
import './styles.css';
import { useState } from 'react';
import Account from '../Account'

const Menu = () => {
    const [showContainer, setShowContainer] = useState(false);

    const handleClick = () => {
        return showContainer ? setShowContainer(false) : setShowContainer(true);
    } 

    return (
        <div className='menu-section'>
            <div className='menu-container'>
                <div className='menu-item' onClick={handleClick}/>
                {
                    showContainer ? <Account handleClick={handleClick}/> : null
                }
            </div>
        </div>
    )
}

export default Menu;