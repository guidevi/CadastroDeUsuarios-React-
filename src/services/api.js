import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-com-node-js-e-banco-de-dados.onrender.com'

})

export default api