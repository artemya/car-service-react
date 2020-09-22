import API from '../utils/API'


const get = id => {
    return API.get(`/api/checks/clients/${id}`);
};

const create = data => {
    return API.post("/api/checks/", data);
};

const show = id => {
    return API.get(`/api/checks/${id}`);
};

export default {
    get,
    create,
    show
}