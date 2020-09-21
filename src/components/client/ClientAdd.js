import ClientService from '../../services/ClientService';
import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router'

function ClientAdd() {
    const clientState = {
        id: null,
        name: '',
        phoneNumber: ''
    }

    const [client, setClient] = useState(clientState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setClient({ ...client, [name]: value });
      };

    const saveClient = (event) => {
        event.preventDefault();
        var data = {
            name: client.name,
            phoneNumber: client.phoneNumber
        };

        ClientService.create(data)      
    }
    

    return (
        <form onSubmit={saveClient}>
            <input type="text"
            className="form-control" 
            id="name"
            required 
            onChange={handleInputChange}
            name="name"/>

            <input type="text"
            className="form-control" 
            id="phoneNumber"
            required 
            onChange={handleInputChange}
            name="phoneNumber"/>

            <button className="btn btn-success">
                Submit
            </button>
        </form>
        
    )
}
export default ClientAdd