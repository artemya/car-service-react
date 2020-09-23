import React from 'react'
import ServiceItemService from '../../services/ServiceItemService'
import './Check.css'

const ServiceFormCheck = (props) => {
    const saveToCheck = async() => {
        var data = {
            checkId: parseInt(props.checkId),
            serviceId: props.service.id
        };
        console.log(data)
        await ServiceItemService.create(data);
        alert(`Service ${props.service.name} added to check №${props.checkId}`)
    }
    
    return (
        <div>
            <i
                onClick={saveToCheck}
                key={props.service.id} 
                id={props.service.id}
                className='fas fa-plus icon-style'>
            </i>
            <label className="label-name">{props.service.name}</label>
            

        </div>
    )
}
export default ServiceFormCheck;
