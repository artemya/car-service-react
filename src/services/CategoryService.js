import API from '../utils/API'

const getAll = () => {
    return API.get('/api/categories');
}

export default {
    getAll,
}