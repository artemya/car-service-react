import ClientService from '../../services/ClientService';
import React, { useState } from 'react';

function ClientAdd(props) {
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

    const saveClient = async(event) => {
        event.preventDefault();
        var data = {
            name: client.name,
            phoneNumber: client.phoneNumber
        };

        await ClientService.create(data)      
        props.history.push('/api/clients')
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