import actionTypes from '../../actions/Account/types';
import storage from "../../../services/storage";

const initialState = {
    data: {},
    token: storage.getAuth().token || null
};
const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return { ...state, data: action.payload };
        case actionTypes.REDIRECT:
            return { ...state, data: action.payload };
        case actionTypes.LOGOUT: {
            storage.removeAuth();
            return { ...state, token: null };
        }
        default:
            return state;
    }
}

export default AccountReducer;