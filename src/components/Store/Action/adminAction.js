
import actiontypes from "./actionType"
import { fetchLimitBannerImg, fetchDataTypeProduct, fetchLimitProductDisplay, getAllProduct } from "../../../Services/ApiService";


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
export const fetchLimitProductFigure = () => {
    return async (dispatch, getState) => {
        try {
            let dataPro = await fetchLimitProductDisplay('6', 'Figure')
            if (dataPro && dataPro.errCode === 0) {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_PRODUCT_DISPLAY_SUCCESS,
                    data: dataPro
                })
            } else {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_PRODUCT_DISPLAY_FAIL,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actiontypes.ADMIN_FETCH_PRODUCT_DISPLAY_FAIL,
            })
        }
    }
}
export const fetchLimitProductChar = () => {
    return async (dispatch, getState) => {
        try {
            let dataChar = await fetchLimitProductDisplay('12', 'Character')
            if (dataChar && dataChar.errCode === 0) {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_PRODUCT_CHARACTER_SUCCESS,
                    data: dataChar
                })
            } else {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_PRODUCT_CHARACTER_FAIL,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actiontypes.ADMIN_FETCH_PRODUCT_CHARACTER_FAIL,
            })
        }
    }
}
export const fetchLimitProductAni = () => {
    return async (dispatch, getState) => {
        try {
            let dataAni = await fetchLimitProductDisplay('6', 'Anime')
            if (dataAni && dataAni.errCode === 0) {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_PRODUCT_ANIME_SUCCESS,
                    data: dataAni
                })
            } else {
                dispatch({
                    type: actiontypes.ADMIN_FETCH_PRODUCT_ANIME_FAIL,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actiontypes.ADMIN_FETCH_PRODUCT_ANIME_FAIL,
            })
        }
    }
}

export const fetchAllDetailProduct = () => {
    return async (dispatch, getState) => {
        try {
            let dataDetail = await getAllProduct()
            if (dataDetail && dataDetail.errCode === 0) {
                dispatch({
                    type: actiontypes.FETCH_ALL_PRODUCT_SUCCESS,
                    data: dataDetail
                })
            } else {
                dispatch({
                    type: actiontypes.FETCH_ALL_PRODUCT_FAIL,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch({
                type: actiontypes.FETCH_ALL_PRODUCT_FAIL,
            })
        }
    }
}