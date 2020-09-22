import React, { useState } from 'react';
import MaterialService from '../../services/MaterialService';
import CustomGet from '../../utils/CustomGET';

export default function Material(props) {
    const materialState = {
        id:null,
        name:'',
        price:null,
        categoryId:null
    }
    const [currentMaterial, setCurrentMaterial] = useState(materialState);

    CustomGet(MaterialService, setCurrentMaterial, props.match.params.id)

    return (
        <p>
           {currentMaterial.name} {currentMaterial.price} {currentMaterial.categoryId} 
           <a href="/api/materials" className="badge badge-success">
               Back
            </a>
        </p>
    )
}
