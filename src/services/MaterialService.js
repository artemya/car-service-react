import API from '../utils/API'

const getAll = () => {
    return API.get('/api/expendablematerials');
}

const get = id => {
    return API.get(`/api/expendablematerials/${id}`);
};

const create = data => {
    return API.post("/api/expendablematerials/", data);
};

export default {
    getAll,
    get,
    create
}