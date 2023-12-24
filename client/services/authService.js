import axios from "axios"

export const auth = () => {
    return axios.get('/auth')
}