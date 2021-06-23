import actionTypes from './types';
import { developmentApiCall } from '../../../services/api';
import { HTTP } from '../../../services/constants';
import storage from '../../../services/storage'


export const login = () => async dispatch => {
  try {
    const { data } = await developmentApiCall(
      `/login`,
      null,
      null,
      HTTP.GET,
      null
    );
    dispatch({
      type: actionTypes.LOGIN,
      payload: data
    });
    return { success: true, url: data };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};

export const redirect = (queryString) => async dispatch => {
  try {
    const { data } = await developmentApiCall(
      `/redirect${queryString}`,
      null,
      null,
      HTTP.GET,
      null
    );
    if (!data.access_token)
      return { success: false, error: data.message };

    storage.setAuth(data);

    dispatch({
      type: actionTypes.REDIRECT,
      payload: data
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};



export const logout = () => async dispatch => {
  try {

    storage.removeAuth();
    dispatch({
      type: actionTypes.LOGOUT
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.response.data };
  }

};
