import { useState } from 'react';
import './styles.css';
import BuyContainer from './BuyContainer';

const BuyButton = (props) => {
    const [showContainer, setShowContainer] = useState(false);

    const handleClick = () => {
        return showContainer ? setShowContainer(false) : setShowContainer(true);
    }
    
    return (
        <div>
            <div className="buy button" onClick={ handleClick }></div>
                {
                    showContainer ? <BuyContainer id={props.id} vrm={props.vrm} price={props.price} status={props.status} handleClick={handleClick}/> : null
                }
        </div>
    )
}

export default BuyButton;