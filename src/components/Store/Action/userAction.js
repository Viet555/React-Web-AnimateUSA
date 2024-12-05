import { type } from "@testing-library/user-event/dist/type"
import actiontypes from "./actionType"

export const UserLoginSuccess = (userInfo) => ({
    type: actiontypes.USER_LOGIN_SUCCESS,
    data: userInfo
})
export const UserLoginFail = () => ({
    type: actiontypes.USER_LOGIN_FAIL,

})

export const UserLogout = () => ({
    type: actiontypes.USER_LOGOUT,

})

