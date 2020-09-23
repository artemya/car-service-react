import API from '../utils/API'

const create = data => {
    return API.post("/api/services/items/", data);
};

export default {
    create
}