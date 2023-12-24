import axios from "axios"

export const getPdf = () => {
    return axios.get('/getPdf')
}