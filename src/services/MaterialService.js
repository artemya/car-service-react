import API from '../utils/API'

const getAll = () => {
    return API.get('/api/expendablematerials');
}

export default {
    getAll,
}