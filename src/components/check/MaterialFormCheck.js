
import React from 'react'
import MaterialItemService from '../../services/MaterialItemService';

const MaterialFormCheck = (props) => {
    const saveToCheck = async() => {
        var data = {
            checkId: parseInt(props.checkId),
            ExpendableMaterialId: props.material.id
        };
        console.log(data)
        await MaterialItemService.create(data);
        alert(`Material ${props.material.name} added to check №${props.checkId}`);
    }
    
    return (
        <div>
            <i
                onClick={saveToCheck}
                key={props.material.id} 
                id={props.material.id}
                className="fas fa-plus icon-style">
            </i>
            <label className="label-name">{props.material.name}</label>

        </div>
    )
}
export default MaterialFormCheck;