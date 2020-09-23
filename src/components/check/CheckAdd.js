import CheckService from '../../services/CheckService';
import React from 'react';


function CheckAdd(props) {
    const saveCheck = async(event) => {
        var now = new Date()
        console.log(now.toISOString());
        var data = {
            date: now.toISOString().split('.')[0],
            clientId: parseInt(props.idClient)
        };

        await CheckService.create(data)   
        console.log(props.idClient);   
        props.history.push(`/api/clients/${props.idClient}/checks`)
    }
    

    return (
        <form onSubmit={saveCheck}>
            <button className="btn btn-success buttonCreate2" >
                Create new check
            </button>
        </form>
        
    )
}
export default CheckAdd