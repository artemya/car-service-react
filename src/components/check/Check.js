import React, { useState, useEffect } from 'react'
import CheckService from '../../services/CheckService';

const Check = (props) => {
    const [checks, setCheck] = useState([]);
    const getAll = (id) => {
        CheckService.get(id)
        .then(async respone => {
            await setCheck(respone.data);
            console.log(respone.data);
        })
    }

    useEffect(() => {
        console.log('передача', props.idClient)
        getAll(parseInt(props.idClient));
    }, [])

    return (
        <div>
            {checks.map(c => (
                
                <p key={c.id}>
                    <h5>Check №{c.id}</h5>
                    <label>Date creation {c.date}</label>
                </p>
            ))}
        </div>
    )
}
export default Check;