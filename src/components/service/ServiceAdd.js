import React, { useState } from 'react';
import CategoryService from '../../services/CategoryService';
import ServicesService from '../../services/ServicesService';
import CustomGet from '../../utils/CustomGET';

function ServiceAdd(props) {
    const serviceState = {
        id: null,
        name: '',
        price: null,
        categoryId: null
    }
    const [ categories, setCategory ] = useState([]);


    CustomGet(CategoryService, setCategory)

    const [service, setService] = useState(serviceState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setService({ ...service, [name]: value });
      };

    const saveService = async(event) => {
        event.preventDefault();
        var data = {
            name: service.name,
            price: parseFloat(service.price),
            categoryId: parseInt(service.categoryId)
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
            <input 
                className="form-control" 
                id="price"
                required 
                onChange={handleInputChange}
                name="price"
                type="number"/>
            <p>Category:</p>
            <select name="categoryId" id="categoryId" onChange={handleInputChange}>
                {categories.map(c => (
                   <option key={c.id} value={c.id} type="number">{c.name}</option>
                ))}
            </select>
            <button className="btn btn-success">
                Submit
            </button>
        </form>
        
    )
}
export default ServiceAdd