import * as types from './index';

export const getUsers = (params:any) => {
    return ({
        type: types.GET_USERS,
        params,
    })
};

export const getUserById = (params:any) => {
    return ({
        type: types.GET_USERS_BY_USER,
        params,
    })
};

export const getPosts = (params:any) => {
    return ({
        type: types.GET_POSTS_BY_USER,
        params,
    })
};

export const getAlbums = (params:any) => {
    return ({
        type: types.GET_ALBUMS_BY_USER,
        params,
    })
};

export const updateUser = (params:any) => {
    return ({
        type: types.UPDATE_USER,
        params,
    })
};

export const createUser = (params:any) => {
    return ({
        type: types.CREATE_USER,
        params,
    })
};

export const createUserClear = (params:any) => {
    return ({
        type: types.CREATE_USER_CLEAR,
        params,
    })
};
