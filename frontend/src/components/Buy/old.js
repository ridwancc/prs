import React, { useState } from 'react';
import './styles.css';

const Buy = (props) => {
    props = props.props;
    const [show, setShow] = useState(0);
    const [account, setAccount] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [vin, setVin] = useState('');
    return (
        <div>
            <div className='buy button' id={props.id} onClick={(e) => handleUpdate(e, show, setShow, setAccount)}></div>
            {
                show ?
                showBuyContainer(props, show, setShow, account, setAccount, name, setName, email, setEmail, make, setMake, model, setModel, vin, setVin) :
                null
            }
        </div>
    )
}

const handleUpdate = (e, show, setShow, setAccount) => {
    return show === 1 ? (setShow(0), setAccount(0)) : setShow(1);
}

const handleClick = (e, account, setAccount) => {
    return account === 1 ? setAccount(0) : setAccount(1);
}

const showBuyContainer = (props, show, setShow, account, setAccount, name, setName, email, setEmail, make, setMake, model, setModel, vin, setVin) => {
    return (
        <div className="buy-container">
            <h3 className='buy-title'>Ready to Purchase?</h3>
            <div className="close button" onClick={(e) => handleUpdate(e, show, setShow, setAccount)}></div>
            <div className='number-plate' id={`number-plate-id-${props.id}`}>
                <p id="vrm">{props.vrm}</p>
            </div>
            <div className="details">
                <p id='price'>£{props.price}</p>
            </div>
            <div className="buy-form">
                <label>Name: </label>
                <input type="text" autoComplete="false" value={ name } onChange={(e) => setName(e.target.value)}></input>
                <label>Email: </label>
                <input type="email" autoComplete="false" value={ email } onChange={(e) => setEmail(e.target.value)}></input>
                <div className="create-an-account">
                    <p>If you have your vehicle details on hand we'll register it for you.</p>
                    <label>Register a vehicle?</label>
                    <input type="checkbox" onClick={(e) =>handleClick(e, account, setAccount)}></input>
                </div>
                {
                account ?
                registerVehicle(make, setMake, model, setModel, vin, setVin) :
                null
            }
                <div className="submit button" onClick={() => handleBuy(props, account, name, email, make, model, vin)}>purchase</div>
            </div>
        </div>
    );
}

const registerVehicle = (make, setMake, model, setModel, vin, setVin) => {
    return (
        <div className="register-vehicle">
        <label>Make: </label>
        <input type="text" required value={ make } onChange={(e) => setMake(e.target.value)}></input>
        <label>Model: </label>
        <input type="text" required value={ model } onChange={(e) => setModel(e.target.value)}></input>
        <label>VIN: </label>
        <input type="text" required value={ vin } onChange={(e) => setVin(e.target.value)}></input>
        </div>
    );
}

const handleBuy = (props, account, name, email, make, model, vin) => {

    // create new account
    const accountDetails = {
        name,
        email,
    };

    // update the plate
    const numberPlate = {
        plateid: props.id,
        status: 'sold'
    };

    if (account) {
        // create new vehicle
        const vehicleDetails = {
            make,
            model,
            vin,
            account: "get the account number"
        }
        // create a new vehicle registration
        const vehicleRegistration = {
            plate: "get the plate id",
            account: "get the account id",
            vehicle: "get the vehicle id"
        }

        // send post requests to the back end.
        console.log(vehicleDetails);
        console.log(vehicleRegistration);
    }

    console.log(accountDetails);
    console.log(numberPlate);

}

export default Buy;