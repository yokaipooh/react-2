import * as listUserConstants from '../constants/list.user'

const initialState = {
    listUser: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case listUserConstants.GET_USERS: {
            return {
                ...state,
                listUser: [],
            }
        }
        case listUserConstants.GET_USERS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listUser: data,
            }
        }
        case listUserConstants.GET_USERS_FAIL: {
            return {
                ...state,
                listUser: [],
            }
        }
        default: 
        return state;
    }
}

export default reducer;