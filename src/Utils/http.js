import axios from 'axios'
import { BASE_URL }  from './methods'

axios.defaults.baseURL = BASE_URL

export const requestGenerico  = {
    get : (url) => axios.get(url),
    post :  (url, body)=> axios.post(url, body),
    put : (url, body)=> axios.put(url, body),
}