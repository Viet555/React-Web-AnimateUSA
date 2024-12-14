import actiontypes from "../Action/actionType";
const INITIAL_STATE = {
    BannerData: [],
    typeProduct: [],
    ProductFigure: [],
    ProductCharacter: [],
    ProductAnime: [],
    AllProduct: [],
    DataGender: [],
    listUser: [],
    listProductNew: []
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


            return {
                ...state,
                AllProduct: action.data.data,
            };

        case actiontypes.FETCH_ALL_PRODUCT_FAIL:
            return {
                ...state,
                AllProduct: []
            };

        case actiontypes.FETCH_DATA_ALLCODES_GENDER_SUCCESS:


            return {
                ...state,
                DataGender: action.data,
            };

        case actiontypes.FETCH_DATA_ALLCODES_GENDER_FAIL:
            return {
                ...state,
                DataGender: []
            };

        case actiontypes.FETCH_ALL_USER_SUCCESS:

            return {
                ...state,
                listUser: action.data.data,
            };

        case actiontypes.FETCH_ALL_USER_FAIL:
            return {
                ...state,
                listUser: []
            };
        //product data

        case actiontypes.FECTH_ALL_PRODUCT_NEW_SUCCESS:

            return {
                ...state,
                listProductNew: action.data.data,
            };

        case actiontypes.FECTH_ALL_PRODUCT_NEW_FAIL:
            return {
                ...state,
                listProductNew: []
            };
        default: // need this for default case
            return state

    }
};

export default adminReducer;