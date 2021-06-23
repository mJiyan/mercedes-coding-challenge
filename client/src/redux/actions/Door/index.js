import actionTypes from './types';
import { developmentApiCall } from '../../../services/api';
import { HTTP } from '../../../services/constants';

export const getVehicleDoorStatus = (id) => async dispatch => {
  try {
    const { data } = await developmentApiCall(
      `/vehicles/${id}/doors`,
      null,
      null,
      HTTP.GET,
      null,
      true
    );
    dispatch({
      type: actionTypes.GET_VEHICLE_DOOR_STATUS,
      payload: data
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};


export const updateVehicleDoorStatus = (id, command) => async dispatch => {
  try {
    const { data } = await developmentApiCall(
      `/vehicles/${id}/doors`,
      command,
      null,
      HTTP.POST,
      null,
      true
    );

    dispatch({
      type: actionTypes.UPDATE_VEHICLE_DOOR_STATUS,
      payload: data
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};

