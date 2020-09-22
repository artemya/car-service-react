import API from '../utils/API'


const get = id => {
    return API.get(`/api/checks/clients/${id}`);
};

const create = data => {
    return API.post("/api/checks/", data);
};
export default {
    get,
    create
}