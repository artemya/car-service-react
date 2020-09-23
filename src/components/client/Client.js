import React, { useState } from 'react';
import ClientService from '../../services/ClientService'
import CustomGet from '../../utils/CustomGET';
import CheckList from '../check/CheckList';

const Client = (props) => {
    const clientState = {
        id:null,
        name:'',
        phoneNumber:''
    }

    const [currentClient, setCurrentClient] = useState(clientState);

    CustomGet(ClientService, setCurrentClient, props.match.params.id)

    return (
        <div className="container customContainer">
            <h5>Client name: {currentClient.name}</h5>
            <p>Client phone: {currentClient.phoneNumber}</p>
            
           <CheckList idClient={props.match.params.id} />
           <a href="/api/clients" className="badge badge-success">
               Back to client list
            </a>
        </div>
    )
}

export default Client