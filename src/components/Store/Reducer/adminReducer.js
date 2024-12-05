import actiontypes from "../Action/actionType";
const INITIAL_STATE = {
    BannerData: [],

};
const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actiontypes.ADMIN_FETCH_BANNER_SUCCESS:
            console.log('check data action ', action)

            return {
                ...state,
                BannerData: action.data,
            };

        case actiontypes.ADMIN_FETCH_BANNER_FAIL:
            return {
                ...state,
                BannerData: ""
            };

        default: // need this for default case
            return state

    }
};

export default adminReducer;