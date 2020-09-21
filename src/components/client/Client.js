import React, { useState, useEffect } from 'react';
import ClientService from '../../services/ClientService'

const Client = (props) => {
    const clientState = {
        id:null,
        name:'',
        phoneNumber:''
    }
    const [currentClient, setCurrentClient] = useState(clientState);

    const getClient = (id) => {
        ClientService.get(id)
          .then(respone => {
            setCurrentClient(respone.data);
            console.log('client:',respone.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      useEffect(() => {
        // console.log('props', props)
        getClient(props.match.params.id);
      }, [props.match.params.id]);
    return (
        <p>
           {currentClient.name} {currentClient.phoneNumber} 
           <a href="/api/clients" className="badge badge-warning">
               Back
            </a>
        </p>
    )
}

export default Client