import API from '../utils/API'

const getAll = () => {
    return API.get('/api/clients');
}

export default {
    getAll,
}