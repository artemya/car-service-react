import React, { useState, useEffect } from 'react';
import ServicesService from '../../services/ServicesService';

const Service = (props) => {
    const serviceState = {
        id:null,
        name:'',
        price:null,
        categoryId:null
    }
    const [currentService, setCurrentService] = useState(serviceState);

    const getClient = (id) => {
        ServicesService.get(id)
          .then(respone => {
            setCurrentService(respone.data);
            console.log('service:',respone.data);
          })
          .catch(e => {
            console.log(e);
          });
    }


    useEffect(() => {
        getClient(props.match.params.id);
        }, [props.match.params.id]);
    
    return (
        <p>
           {currentService.name} {currentService.price} {currentService.categoryId} 
           <a href="/api/clients" className="badge badge-success">
               Back
            </a>
        </p>
    )
}

export default Service