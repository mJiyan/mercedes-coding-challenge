import actionTypes from './types';
import { developmentApiCall } from '../../../services/api';
import { HTTP } from '../../../services/constants';


export const getVehicles = () => async dispatch => {
  try {
    const { data } = await developmentApiCall(
      '/vehicles',
      null,
      null,
      HTTP.GET,
      null,
      true
    );
    dispatch({
      type: actionTypes.GET_VEHICLES,
      payload: data
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};


export const getVehicleDetails = (id) => async dispatch => {
  try {
    const { data } = await developmentApiCall(
      `/vehicles/${id}`,
      null,
      null,
      HTTP.GET,
      null,
      true
    );
    dispatch({
      type: actionTypes.GET_VEHICLE_DETAILS,
      payload: data
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};
