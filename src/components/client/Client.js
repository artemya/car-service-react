import React, { useState } from 'react';
import ClientService from '../../services/ClientService'
import CustomGet from '../../utils/CustomGET';
import Check from '../check/Check';

const Client = (props) => {
    const clientState = {
        id:null,
        name:'',
        phoneNumber:''
    }

    const [currentClient, setCurrentClient] = useState(clientState);

    CustomGet(ClientService, setCurrentClient, props.match.params.id)

    return (
        <div>
           {currentClient.name} {currentClient.phoneNumber} 
           <a href="/api/clients" className="badge badge-success">
               Back
            </a>
            <Check idClient={props.match.params.id} />
        </div>
    )
}

export default Client