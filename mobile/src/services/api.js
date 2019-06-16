import axios from 'axios'
import server from './server'

const api = axios.create({
  baseURL: server.getURL()
})

export default api
