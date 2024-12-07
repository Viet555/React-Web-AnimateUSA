import axios from "../utils/CustomizeAxios";
const userLogin = (email, password) => {
    return axios.post('/api/login', { email, password })
}
const CreateAccount = (email, password, firstName, lastName) => {
    return axios.post('/api/create-new-user', { email, password, firstName, lastName },);
}
const AddBannerImage = (dataInput) => {
    return axios.post('/api/create-img-banner', dataInput);
}
const fetchLimitBannerImg = (limitInput) => {
    return axios.get(`/api/limit-img-banner?limitInput=${limitInput}`);
}
const fetchDataTypeProduct = (typeInput) => {
    return axios.get(`/api/allcode?typeInput=${typeInput}`);
}
const createProductDisplay = (ProductData) => {
    return axios.post(`/api/Create-product`, ProductData);
}
const fetchLimitProductDisplay = (limitInput, typeInput) => {
    return axios.get(`/api/limit-Product-display?limitInput=${limitInput}&typeInput=${typeInput}`);
}
export { userLogin, CreateAccount, AddBannerImage, fetchLimitBannerImg, fetchDataTypeProduct, createProductDisplay, fetchLimitProductDisplay }