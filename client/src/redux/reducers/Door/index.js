import actionTypes from '../../actions/Door/types';

const initialState = {
    doorStatus: {}
};

const DoorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_VEHICLE_DOOR_STATUS:
            return { ...state, doorStatus: action.payload }
        case actionTypes.UPDATE_VEHICLE_DOOR_STATUS:
            return { ...state, doorStatus: action.payload }
        default:
            return state;
    }
}

export default DoorReducer;