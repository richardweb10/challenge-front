import { takeLatest, all } from "redux-saga/effects";
import * as types from "./../actions";

import {getUsers, getPostsByUser, getAlbumsByUser,
    updateUser, createUser, getUserById} from './userSagas';



function* actionWatcherUser() {
  yield takeLatest(types.GET_USERS, getUsers);
  yield takeLatest(types.GET_POSTS_BY_USER, getPostsByUser);
  yield takeLatest(types.GET_ALBUMS_BY_USER, getAlbumsByUser);
  yield takeLatest(types.UPDATE_USER, updateUser);
  yield takeLatest(types.CREATE_USER, createUser);  
  yield takeLatest(types.GET_USERS_BY_USER, getUserById);
  
 }

export default function* rootSaga() {
  yield all([
    actionWatcherUser()
  ]);
}
