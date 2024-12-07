import actiontypes from "../Action/actionType";
const INITIAL_STATE = {
    BannerData: [],
    typeProduct: []
};
const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actiontypes.ADMIN_FETCH_BANNER_SUCCESS:


            return {
                ...state,
                BannerData: action.data,
            };

        case actiontypes.ADMIN_FETCH_BANNER_FAIL:
            return {
                ...state,
                BannerData: ""
            };
        case actiontypes.ADMIN_FETCH_TYPE_PRODUCT_SUCCESS:
            console.log('check data action ', action)

            return {
                ...state,
                typeProduct: action.dataType,
            };

        case actiontypes.ADMIN_FETCH_TYPE_PRODUCT_FAIL:
            return {
                ...state,
                typeProduct: []
            };
        default: // need this for default case
            return state

    }
};

export default adminReducer;