import { useEffect } from 'react';

function CustomGet(service, setSomething, id) {

    const get = (id) => {
        console.log(id);
        if(id) {
            service.get(id)
            .then(thenQuery(setSomething)) 
        } else { 
            service.getAll() 
            .then(thenQuery(setSomething))
        }
        
    }

    useEffect(() => {
        get(id);
    }, [id])
}

function thenQuery(setSomething) {
    return (async respone => {
        await setSomething(respone.data);
        console.log(respone.data);
    })
}
export default CustomGet