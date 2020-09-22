import React, { useState } from 'react'
import MaterialItemService from '../../services/MaterialItemService';
import MaterialService from '../../services/MaterialService';

const MaterialFormCheck = (props) => {
    const saveToCheck = async(event) => {
        var data = {
            checkId: parseInt(props.checkId),
            ExpendableMaterialId: props.material.id
        };
        console.log(data)
        await MaterialItemService.create(data);
    }
    
    return (
        <div>
            <input 
                onClick={saveToCheck}
                key={props.material.id} 
                type="checkbox"
                id={props.material.id}
            ></input>
            // {props.material.name}

        </div>
    )
}
export default MaterialFormCheck;