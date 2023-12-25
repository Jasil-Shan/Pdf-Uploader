import axios from "axios"


export const uploadPdf = (formData) => {
    return axios.post('/uploadPdf', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    })
}

export const getPdf = () => {
    return axios.get(`/getPdf`, {
        responseType: 'blob',
    });
}