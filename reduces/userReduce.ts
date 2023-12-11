import * as type from './../actions/index';

const userReducer = (state = {
    isLoading: false,
    dataPerfil: {},
    imgPerfil: new Date(),
    isLoadingGetUsers: false,
    dataImageNft: [],
    pageImageNFT: 1,
    ended: false
}, action: any) => {
    switch (action.type) {

        case type.GET_USERS:
            return { ...state, isLoading: true };
        case type.GET_USERS_RECEIVED:
            return { ...state, data: action.data, isLoading: false, error: false };
        case type.GET_USERS_FAILED:
            return { ...state, error: action.error, isLoading: false, };

        case type.GET_POSTS_BY_USER:
            return { ...state, isLoadingPosts: true };
        case type.GET_POSTS_BY_USER_RECEIVED:
            return { ...state, dataPosts: action.data, isLoadingPosts: false, errorPosts: false };
        case type.GET_POSTS_BY_USER_FAILED:
            return { ...state, errorPosts: action.error, isLoadingPosts: false, };

        case type.GET_ALBUMS_BY_USER:
            return { ...state, isLoadingAlbums: true };
        case type.GET_ALBUMS_BY_USER_RECEIVED:
            return { ...state, dataAlbums: action.data, isLoadingAlbums: false };
        case type.GET_ALBUMS_BY_USER_FAILED:
            return { ...state, errorAlbums: action.error, isLoadingAlbums: false, };

        case type.UPDATE_USER:
            return { ...state, isLoadingUp: true };
        case type.UPDATE_USER_RECEIVED:
            return { ...state, dataUp: action.data, isLoadingUp: false, errorUp: false };
        case type.UPDATE_USER_FAILED:
            return { ...state, errorUp: action.error, isLoadingUp: false, };

        case type.CREATE_USER:
            return { ...state, isLoadingCr: true };
        case type.CREATE_USER_RECEIVED:
            return { ...state, dataCr: action.data, isLoadingCr: false, errorCr: false };
        case type.CREATE_USER_FAILED:
            return { ...state, errorCr: action.error, isLoadingCr: false, };

        case type.CREATE_USER_CLEAR:
            return { ...state, dataCr: undefined, isLoadingCr: false, errorCr: false };

        case type.GET_USERS_BY_USER:
            return { ...state, isLoadingById: true };
        case type.GET_USERS_BY_USER_RECEIVED:
            return { ...state, dataById: action.data, isLoadingById: false, errorById: false };
        case type.GET_USERS_BY_USER_FAILED:
            return { ...state, errorById: action.error, isLoadingById: false, };



        default:
            return state;
    }
}

export default userReducer;