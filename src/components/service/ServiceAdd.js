import React, { useState } from 'react';
import ServicesService from '../../services/ServicesService';

function ServiceAdd(props) {
    const serviceState = {
        id: null,
        name: '',
        price: null,
        categoryId: null
    }

    const [service, setService] = useState(serviceState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setService({ ...service, [name]: value });
      };

    const saveService = async(event) => {
        event.preventDefault();
        var data = {
            name: service.name,
            price: service.price,
            categoryId: service.categoryId
        };

        await ServicesService.create(data)      
        props.history.push('/api/services')
    }
    

    return (
        <form onSubmit={saveService}>
            <p>Service name:</p>
            <input type="text"
                className="form-control" 
                id="name"
                required 
                onChange={handleInputChange}
                name="name"/>
            <p>Price:</p>
            <input type="text"
                className="form-control" 
                id="price"
                required 
                onChange={handleInputChange}
                name="price"/>
            <p>Category:</p>
            <input type="text"
                className="form-control" 
                id="categoryId"
                required 
                onChange={handleInputChange}
                name="categoryId"/>

            <button className="btn btn-success">
                Submit
            </button>
        </form>
        
    )
}
export default ServiceAdd