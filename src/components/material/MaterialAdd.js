import React, { useState } from 'react';
import MaterialService from '../../services/MaterialService';

function MaterialAdd(props) {
    const serviceState = {
        id: null,
        name: '',
        price: null,
        categoryId: null
    }

    const [material, setMaterial] = useState(serviceState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setMaterial({ ...material, [name]: value });
      };

    const saveMaterial = async(event) => {
        event.preventDefault();
        var data = {
            name: material.name,
            price: parseFloat(material.price),
        };

        await MaterialService.create(data)      
        props.history.push('/api/materials')
    }
    

    return (
        <form onSubmit={saveMaterial}>
            <p>Material name:</p>
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
            <button className="btn btn-success">
                Submit
            </button>
        </form>
        
    )
}
export default MaterialAdd