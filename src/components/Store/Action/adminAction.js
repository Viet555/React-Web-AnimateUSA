
import actiontypes from "./actionType"
import { fetchLimitBannerImg, fetchDataTypeProduct } from "../../../Services/ApiService";


export const fetchLimitBanner = () => {
    return async (dispatch, getState) => {
        try {
            let resData = await fetchLimitBannerImg("5")

            if (resData && resData.errCode === 0) {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_BANNER_SUCCESS,
                    data: resData.data
                })
            } else {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_BANNER_FAIL,
                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.ADMIN_FETCH_BANNER_FAIL,
            })
            console.log(e)
        }

    }

}
export const fetchTypeproduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let resData = await fetchDataTypeProduct('PRODUCT')
            console.log(resData)
            if (resData && resData.errCode === 0) {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_TYPE_PRODUCT_SUCCESS,
                    dataType: resData.data
                })
            } else {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_TYPE_PRODUCT_FAIL,

                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actiontypes.ADMIN_FETCH_TYPE_PRODUCT_FAIL,

            })
        }
    }

}
