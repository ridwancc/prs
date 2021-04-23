import './styles.css'
import { useState } from 'react';
import { getAccountVehicleRegistrations, findAccountByEmail, fetchUrl } from '../api'

const Account = (props) => {
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);


    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await getVehicles();
        setData(data);
    }

    const getVehicles = async () => {
        const account = await findAccountByEmail(email);
        const accountId = account.data.accountId;
        const vehicleRegistrations = await getAccountVehicleRegistrations(accountId);
        const registrationList = vehicleRegistrations.data._embedded.vehicleregistration;
        const data = [];
        registrationList.map(async (val, key) => {
            const plateUrl = val._links.plate.href;
            const plate = await fetchUrl(plateUrl);
            const vehicleUrl = val._links.vehicle.href;
            const vehicle = await fetchUrl(vehicleUrl);
            data.push(plate.data.vrm);
            data.push(vehicle.data.vin);
        })
        return data;
    }

    const VehicleRegistrations = (props) => {
        const list = props.data.map(function(name, index){
            return <div className="grid-item" key={index}>{name}</div>;
            })
        return (
            <div className="grid-container">
                {list}
            </div>
        )
    }

    return (
        <div className="account-container">
            <div className="close button" onClick={props.handleClick}></div>
            <h2>Registered Plates</h2>
            <form onSubmit={handleSubmit}>
            <div className="buy-form">
                <label>Email: </label>
                <input type="email" value={email} onChange={handleChange} required/>
            </div>
            </form>
            <div className="grid-container">
                    <div className="grid-title">Plate</div>
                    <div className="grid-title">Vehicle</div>
            </div>
            <VehicleRegistrations data={data}/>
            
        </div>   
    )
}

export default Account;