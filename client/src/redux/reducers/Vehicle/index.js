import actionTypes from '../../actions/Vehicle/types';

const initialState = {
    vehicles: [],
    vehicle: {},
    doorStatus: {},
    status: {}
};

const VehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_VEHICLES:
            return { ...state, vehicles: action.payload }
        case actionTypes.GET_VEHICLE_DETAILS:
            return { ...state, vehicle: action.payload }
        case actionTypes.GET_VEHICLE_DOOR_STATUS:
            return { ...state, doorStatus: action.payload }
        case actionTypes.UPDATE_VEHICLE_DOOR_STATUS:
            return { ...state, status: action.payload }
        default:
            return state;
    }
}

export default VehicleReducer;