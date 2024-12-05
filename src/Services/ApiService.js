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
export { userLogin, CreateAccount, AddBannerImage, fetchLimitBannerImg }