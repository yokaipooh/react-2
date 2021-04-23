import axiosService from '../services/axiosServices';
import {API_ENPOINT, LIMIT_ITEM} from '../constants/index';

export const getListUsers = () => {
    return axiosService.get(`${API_ENPOINT}${LIMIT_ITEM}`);
}