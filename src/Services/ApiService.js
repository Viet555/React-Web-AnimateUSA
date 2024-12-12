import axios from "../utils/CustomizeAxios";
const userLogin = (email, password) => {
    return axios.post('/api/login', { email, password })
}
const CreateAccount = (email, password, firstName, lastName, roleId, image, gender, address) => {
    return axios.post('/api/create-new-user', { email, password, firstName, lastName, roleId, image, gender, address });
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
const getALLProductByType = (inputType) => {
    return axios.get(`/api/get-all-product-by-type?inputType=${inputType}`);
}
const AllDataProductByid = (inputId) => {
    return axios.get(`/api/all-Detail-product-byId?inputId=${inputId}`);
}
const SaveDeltailProduct = (dataInput) => {
    return axios.post(`/api/Create-infor-Product`, dataInput);
}
const getAllProduct = () => {
    return axios.get(`/api/get-detail-All-product`);
}
const DeleteUserById = (id) => {
    return axios.delete(`/api/delete-user`, { data: { id } });
}
const fetchAllUserTabel = () => {
    return axios.get(`/api/get-all-user`);
}
const handleUpdateUserByAdmin = (id, firstName, lastName, roleId, address, gender, image) => {
    return axios.put(`/api/update-user-admin`, { id, firstName, lastName, roleId, address, gender, image });
}
export {
    userLogin, CreateAccount, AddBannerImage, fetchLimitBannerImg,
    fetchDataTypeProduct, createProductDisplay, fetchLimitProductDisplay, getALLProductByType, AllDataProductByid, DeleteUserById,
    SaveDeltailProduct, getAllProduct, fetchAllUserTabel, handleUpdateUserByAdmin
}