import axios from "axios"

export const auth = () => {
    return axios.get('/auth')
}

export const login = (values) => {
    return axios.post('/login', { ...values })
}

export const signup = (values) => {
    return  axios.post('/signup', { ...values })
}


export const UserLogout = () => {
    return axios.post('/logout')
}