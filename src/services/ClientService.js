import API from '../utils/API'

const getAll = () => {
    return API.get('/api/clients');
}

const get = id => {
    return API.get(`/api/clients/${id}`);
};

const create = data => {
    return API.post("/api/clients/", data);
};

// const remove = id => {
// return API.delete(`/api/clients/${id}`);
// };

export default {
    getAll,
    get,
    create
    // remove
}