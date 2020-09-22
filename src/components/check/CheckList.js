import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CheckService from '../../services/CheckService';
import CheckAdd from './CheckAdd';

const CheckList = (props) => {
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
                    <Link to={`/api/clients/${props.idClient}/checks/${c.id}`}>Show</Link>
                </div>
            ))}
        </div>
    )
}
export default CheckList;