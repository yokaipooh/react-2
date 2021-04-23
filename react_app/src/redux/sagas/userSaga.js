

import { fork, take, call, put } from 'redux-saga/effects'

import * as listUserConstants from '../constants/list.user'
import { getListUsers } from '../apis/userApi';
import { getListError, getListSuccess } from '../actions/usersAction';



function* watchFetchListUser() {
    console.log('AAAAA')
}
    function* rootSaga() {
        yield fork(watchFetchListUser);
    }
    export default rootSaga;