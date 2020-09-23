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
        <form onSubmit={saveMaterial} className='container'>
            <p><h4>Add new material</h4></p>
            <input type="text"
                className="form-control inputAll" 
                id="name"
                required 
                onChange={handleInputChange}
                name="name"
                placeholder="Material name"/>
            <input 
                className="form-control inputAll" 
                id="price"
                required 
                onChange={handleInputChange}
                name="price"
                type="number"
                placeholder="Price"/>
            <button className="btn btn-success">
                Submit
            </button>
        </form>
        
    )
}
export default MaterialAdd