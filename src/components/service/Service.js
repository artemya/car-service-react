import React, { useState } from 'react';
import ServicesService from '../../services/ServicesService';
import CustomGet from '../../utils/CustomGET';

const Service = (props) => {
    const serviceState = {
        id:null,
        name:'',
        price:null,
        categoryId:null
    }
    const [currentService, setCurrentService] = useState(serviceState);

    CustomGet(ServicesService, setCurrentService, props.match.params.id)

    return (
        <p>
           {currentService.name} {currentService.price} {currentService.categoryId} 
           <a href="/api/services" className="badge badge-success">
               Back
            </a>
        </p>
    )
}

export default Service