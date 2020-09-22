import React, { useState } from 'react'
import MaterialService from '../../services/MaterialService';
import CustomGet from '../../utils/CustomGET';
import MaterialFormCheck from './MaterialFormCheck';

const AddInCheck = (props) => {
    const [materials, setMaterial] = useState([]);

    CustomGet(MaterialService, setMaterial);

    return (
        <div>
            {materials.map(c => (
                <MaterialFormCheck checkId={props.match.params.checkId} material={c} />
            ))}
        </div>
    )
}

export default AddInCheck;
