import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = { 
    profile: null, 
    //while the profile is fetching it will be true
    //when profile is found it will once again be false 
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case PROFILE_LOADING:
            return {
                //returns current state 
                ...state, 
                loading: true
            }
        case GET_PROFILE:
            return {
                //return current state and the profile is filled with the payload
                //null profile is changed to the payload profile 
                ...state, 
                profile: action.payload,
                loading: false
            }
        case CLEAR_CURRENT_PROFILE: 
            return {
                ...state, 
                profile: null
            }
        default: 
            return state; 
    }
}