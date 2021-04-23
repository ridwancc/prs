/* eslint-disable default-case */
import './styles.css';
import { useState } from 'react';
import { updatePlate, addAccount, findAccountByEmail, existsByEmail, existsByVehicle, addVehicle, addVehicleRegistration, findPlateById } from '../api';

const BuyContainer = (props) => {
    const [checked, setChecked] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [vin, setVin] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [buttonText, setButtonText] = useState('Purchase');


    const handleBuy = async e => { 
        e.preventDefault();
        const plate = await findPlateById(props.id);
        const plateUrl = plate.data._links.self.href;
        const plateStatus = plate.data.status;
        let accountUrl = null;

        const accountDoesExist = await existsByEmail(email);   
        if (accountDoesExist.data) {
            const account = await findAccountByEmail(email);
            accountUrl = account.data._links.self.href;
        } else {
            const account = await addAccount(name, email)
            accountUrl = account.data._links.self.href;
        }

        if (plateStatus === 'sold') {
            setButtonText('Plate already sold!');
        } else if (!checked) {
            await updatePlate(props.id);
            setButtonText('Success!');
        } else if (checked) {
            const vehicleDoesExist = await existsByVehicle(vin);
            if (vehicleDoesExist.data) {
                setButtonText('Vehicle already registered');
            } else {
                const vehicle = await addVehicle(make, model, vin, accountUrl);
                const vehicleUrl = vehicle.data._links.self.href;
                await addVehicleRegistration(plateUrl, accountUrl, vehicleUrl);
                await updatePlate(props.id);
                setButtonText('Success!');
            }
        }
    }

    const handleChange = e => {
        setButtonText('Purchase');
        var field = e.target.getAttribute('name');
        switch (field) {
            case "make":
                setMake(e.target.value);
                break;
            case "model":
                setModel(e.target.value);
                break;
            case "vin":
                setVin(e.target.value);
                break;
            case "name":
                setName(e.target.value);
        break;
            case "email":
                setEmail(e.target.value);
            break;
        }
    }

    const handleChecked = e => {
        setChecked(e.target.checked);
    }

    return (
        <div className="buy-container">
            <h3 className='buy-title'>Ready to Purchase?</h3>
            <div className="close button" onClick={props.handleClick}></div>
            <div className='number-plate'>
                <p id="vrm">{props.vrm}</p>
            </div>
            <div className="details">
                <p id='price'>£{props.price}</p>
            </div>
            <form onSubmit={handleBuy}>
                <div className="buy-form">
                    <label>Name: </label>
                    <input type="text" value={ name } name="name" onChange={handleChange} required></input>
                    <label>Email: </label>
                    <input type="email" value={ email } name="email" onChange={handleChange} required></input>
                    <div className="register-a-vehicle">
                        <label>Register a vehicle?</label>
                        <input type="checkbox" onClick={handleChecked}></input>
                        { checked ?
                        <div className="register-vehicle">
                        <label>Make: </label>
                        <input type="text" required value={ make } name="make" onChange={handleChange}></input>
                        <label>Model: </label>
                        <input type="text" required value={ model } name="model" onChange={handleChange}></input>
                        <label>VIN: </label>
                        <input type="text" required value={ vin } name="vin" onChange={handleChange}></input>
                        </div> 
                        :
                        null }
                    </div>
                    <input type="submit" className="submit button" id={props.id} value={buttonText}></input>
                </div>
            </form>
        </div>
    )
}

export default BuyContainer;