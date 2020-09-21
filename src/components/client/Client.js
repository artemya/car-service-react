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
    // const deleteClient = () => {
    //     ClientService.remove(currentClient.id)
    //       .then(response => {
    //         console.log(response.data);
    //         props.history.push("/api/clients/");
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   };


    useEffect(() => {
    getClient(props.match.params.id);
    }, [props.match.params.id]);
    
    return (
        <p>
           {currentClient.name} {currentClient.phoneNumber} 
           <a href="/api/clients" className="badge badge-success">
               Back
            </a>
            {/* <button className="badge badge-danger mr-2" onClick={deleteClient}> */}
            Delete
          {/* </button> */}
        </p>
    )
}

export default Client