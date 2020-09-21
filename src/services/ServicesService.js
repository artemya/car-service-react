import API from '../utils/API'

const getAll = () => {
    return API.get('/api/services');
}

const get = id => {
    return API.get(`/api/services/${id}`);
};

const create = data => {
    return API.post("/api/services/", data);
};

export default {
    getAll,
    get,
    create
}