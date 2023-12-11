import { call, put } from 'redux-saga/effects';
import * as types from '../actions/index';
import config from '../config';
//import AsyncStorage from '@react-native-community/async-storage';
import API from '../services';
import { queryOk, querError } from './utilSaga';


export function* getUsers(action: any): Generator {
  try {
    const { params } = action
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const api = API.create(headers, config.url_api_local);

    let data: any = yield call(
      api.users.getUsers,
      params)
    yield queryOk(data.data, types.GET_USERS_FAILED, types.GET_USERS_RECEIVED);
  } catch (error: any) {
    yield querError(error, types.GET_USERS_FAILED);
  }
}

export function* getUserById(action: any): Generator {
  try {
    const { params } = action
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const api = API.create(headers, config.url_api_local);

    let data: any = yield call(
      api.users.getUserById,
      params)
    yield queryOk(data.data, types.GET_USERS_BY_USER_FAILED, types.GET_USERS_BY_USER_RECEIVED);
  } catch (error: any) {
    yield querError(error, types.GET_USERS_BY_USER_FAILED);
  }
}


export function* updateUser(action: any): Generator {
  try {
    const { params } = action
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const api = API.create(headers, config.url_api_local);

    let data: any = yield call(
      api.users.updateUser,
      params)
    yield queryOk(data.data, types.UPDATE_USER_FAILED, types.UPDATE_USER_RECEIVED);
  } catch (error: any) {
    yield querError(error, types.UPDATE_USER_FAILED);
  }
}

export function* createUser(action: any): Generator {
  try {
    const { params } = action
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const api = API.create(headers, config.url_api_local);

    let data: any = yield call(
      api.users.createUser,
      params)
    yield queryOk(data.data, types.CREATE_USER_FAILED, types.CREATE_USER_RECEIVED);
  } catch (error: any) {
    yield querError(error, types.CREATE_USER_FAILED);
  }
}

export function* getPostsByUser(action: any): Generator {
  try {
    const { params } = action
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const api = API.create(headers, config.url_api_local);

    let data: any = yield call(
      api.users.getPostsByUser,
      params)
    yield queryOk(data.data, types.GET_POSTS_BY_USER_FAILED, types.GET_POSTS_BY_USER_RECEIVED);
  } catch (error: any) {
    yield querError(error, types.GET_POSTS_BY_USER_FAILED);
  }
}

export function* getAlbumsByUser(action: any): Generator {
  try {
    const { params } = action
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const api = API.create(headers, config.url_api_local);

    let data: any = yield call(
      api.users.getAlbumsByUser,
      params)
    yield queryOk(data.data, types.GET_ALBUMS_BY_USER_FAILED, types.GET_ALBUMS_BY_USER_RECEIVED);
  } catch (error: any) {
    yield querError(error, types.GET_ALBUMS_BY_USER_FAILED);
  }
}