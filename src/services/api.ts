import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com/films/'
})

export default api