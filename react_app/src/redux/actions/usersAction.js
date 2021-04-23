import * as listUserConstants from '../constants/list.user';
import * as userApi from '../apis/userApi';
import _ from 'lodash'

export const getListUser = () => {
    return dispatch => {
        dispatch(getListPending())
        userApi.getListUsers()
            .then(response => { 
                const data = _.get(response, "data.results", [])
                dispatch(getListSuccess(data)) 
            })
            .catch(err => { dispatch(getListError(err)) })
    }
}

export const getListPending = () => {
    return {
        type: listUserConstants.GET_USERS,
    }
}

export const getListSuccess = (data) => {
    return {
        type: listUserConstants.GET_USERS_SUCCESS,
        payload: {
            data,
        },
    }
}

export const getListError = (error) => {
    return {
        type: listUserConstants.GET_USERS_FAIL,
        payload: {
            error,
        },
    }
}