import api from './api'

const getPostRequest = () => api.get('/posts')

export default getPostRequest;