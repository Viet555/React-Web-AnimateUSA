import actiontypes from "../Action/actionType";
const INITIAL_STATE = {
    BannerData: [],
    typeProduct: [],
    ProductFigure: [],
    ProductCharacter: [],
    ProductAnime: [],
    AllProduct: []
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

        case actiontypes.ADMIN_FETCH_PRODUCT_DISPLAY_SUCCESS:
            console.log('check data action ', action)

            return {
                ...state,
                ProductFigure: action.data,
            };

        case actiontypes.ADMIN_FETCH_PRODUCT_DISPLAY_FAIL:
            return {
                ...state,
                ProductFigure: []
            };

        case actiontypes.ADMIN_FETCH_PRODUCT_CHARACTER_SUCCESS:
            console.log('check data action ', action)

            return {
                ...state,
                ProductCharacter: action.data,
            };

        case actiontypes.ADMIN_FETCH_PRODUCT_CHARACTER_FAIL:
            return {
                ...state,
                ProductCharacter: []
            };

        case actiontypes.ADMIN_FETCH_PRODUCT_ANIME_SUCCESS:
            console.log('check data action ', action)

            return {
                ...state,
                ProductAnime: action.data,
            };

        case actiontypes.ADMIN_FETCH_PRODUCT_ANIME_FAIL:
            return {
                ...state,
                ProductAnime: []
            };
        //
        case actiontypes.FETCH_ALL_PRODUCT_SUCCESS:
            console.log('check data action ', action)

            return {
                ...state,
                AllProduct: action.data.data,
            };

        case actiontypes.FETCH_ALL_PRODUCT_FAIL:
            return {
                ...state,
                AllProduct: []
            };
        default: // need this for default case
            return state

    }
};

export default adminReducer;