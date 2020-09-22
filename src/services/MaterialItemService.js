import API from '../utils/API'

const create = data => {
    return API.post("/api/materials/items/", data);
};

export default {
    create
}