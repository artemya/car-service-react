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

export default {
    getAll,
    get,
    create
}