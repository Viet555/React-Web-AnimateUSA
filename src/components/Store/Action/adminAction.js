
import actiontypes from "./actionType"
import { fetchLimitBannerImg } from "../../../Services/ApiService";


export const fetchLimitBanner = () => {
    return async (dispatch, getState) => {
        try {
            let resData = await fetchLimitBannerImg("5")
            console.log("resdata", resData)
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
