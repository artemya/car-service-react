import API from '../utils/API'

const getAll = () => {
    return API.get('/api/clients');
}

const get = id => {
    return API.get(`/api/clients/${id}`);
  };

export default {
    getAll,
    get
}