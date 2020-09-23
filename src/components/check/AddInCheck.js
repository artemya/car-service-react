import React, { useState } from 'react'
import MaterialService from '../../services/MaterialService';
import ServicesService from '../../services/ServicesService';
import CustomGet from '../../utils/CustomGET';
import './Check.css'
import MaterialFormCheck from './MaterialFormCheck';
import ServiceFormCheck from './ServiceFormCheck';

const AddInCheck = (props) => {
    const [materials, setMaterial] = useState([]);
    const [services, setService] = useState([]);

    CustomGet(MaterialService, setMaterial);
    CustomGet(ServicesService, setService);

    return (
        <div className='container containerCheck'>
            <div className='child'>
                <h4>Available materials: </h4>
                {materials.map(c => (
                    <MaterialFormCheck checkId={props.match.params.checkId} material={c} />
                ))}
            </div>
            <div className='child'>
            <h4>Available works: </h4>
                {services.map(s => (
                    <ServiceFormCheck checkId={props.match.params.checkId} service={s} />
                ))}
            </div>
        </div>
    )
}

export default AddInCheck;
