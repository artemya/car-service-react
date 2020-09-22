import { useEffect } from 'react';

function CustomGet(service, setSomething) {

    const getAll = () => {
        service.getAll()
        .then(respone => {
            setSomething(respone.data);
            console.log(respone.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        getAll();
    }, [])
}
export default CustomGet