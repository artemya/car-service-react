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
        <form onSubmit={saveService} className='container'>
            <p><h4>Add new service:</h4></p>
            <input type="text"
                className="form-control inputAll" 
                id="name"
                required 
                onChange={handleInputChange}
                name="name"
                placeholder="Service name"/>
            <input 
                className="form-control inputAll" 
                id="price"
                required 
                onChange={handleInputChange}
                name="price"
                type="number"
                placeholder="Price"/>
            <select name="categoryId" id="categoryId" className="custom-select inputAll" onChange={handleInputChange}>
                <option selected disabled hidden>Choose category</option>
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