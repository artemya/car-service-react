import API from '../utils/API'


const get = id => {
    return API.get(`/api/checks/clients/${id}`);
};


export default {
    get,
}