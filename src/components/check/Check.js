import React, { useState, useEffect } from 'react'
import CheckService from '../../services/CheckService';
import CheckAdd from './CheckAdd';

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
        console.log('idClient', props.idClient)
        getAll(parseInt(props.idClient));
    }, [])

    return (
        <div>
            <CheckAdd idClient={props.idClient} />
            {checks.map(c => (
                <div key={c.id}>
                    <h5>Check №{c.id}</h5>
                    <label>Date creation {c.date}</label>
                </div>
            ))}
        </div>
    )
}
export default Check;