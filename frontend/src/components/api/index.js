import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'http://localhost:8080'

const FetchPlates = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
      
    useEffect(() => {
        axios(`${url}/plate/`)
          .then(response => {
            setData(response.data._embedded.plate)
          })
          .catch(error => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          })
      }, [])

      return { data, loading, error };
}

const updatePlate = (id) => {
  return axios.patch(`${url}/plate/${id}`, { status: 'sold' });
}

const addAccount = (name, email) => {
  name = name.toLowerCase();
  email = email.toLowerCase();
  return axios.post(`${url}/account/`, { name, email });
}

const findAccountByEmail = email => {
  email = email.toLowerCase();
  return axios(`${url}/account/search/findByEmail?email=${email}`);
}

const existsByEmail = email => {
  email = email.toLowerCase();
  return axios(`${url}/account/search/existsByEmail?email=${email}`);
}

const existsByVehicle = vin => {
  vin = vin.toLowerCase();
  return axios(`${url}/vehicle/search/existsByVin?vin=${vin}`)
}

const addVehicle = (make, model, vin, account) => {
  make = make.toLowerCase();
  model = model.toLowerCase();
  vin = vin.toLowerCase();
  account = account.toLowerCase();
  return axios.post(`${url}/vehicle/`, { make, model, vin, account })
}

const addVehicleRegistration = (plate, account, vehicle) => {
  plate = plate.toLowerCase();
  account = account.toLowerCase();
  vehicle = vehicle.toLowerCase();
  return axios.post(`${url}/vehicleregistration/`, { plate, account, vehicle })
}

const findPlateById = (id) => {
  return axios(`${url}/plate/${id}`)
}

const getAccountVehicleRegistrations = (id) => {
  return axios(`${url}/account/${id}/vehicleregistration`);
}

const fetchUrl = (url) => {
  return axios(url)
}

export {
  FetchPlates,
  updatePlate,
  addAccount,
  findAccountByEmail,
  existsByEmail,
  existsByVehicle,
  addVehicle, 
  addVehicleRegistration,
  findPlateById,
  getAccountVehicleRegistrations,
  fetchUrl
}
