import React, { useState, useEffect } from 'react';
import ClientService from '../../services/ClientService';

const Client = (props) => {
    const client = {
        id: null,
        name: ''
    }

    const[currentClient, setCurrentClient] = useState(client);

    return (
        <div>
            <h2>{currentClient.name}</h2>
        </div>
    )
}

export default Client;