import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE} from './types';


//get current profile 
export const getCurrentProfile = () => dispatch => {
    
    dispatch(setProfileLoading());
    //make our get request 
    axios.get('/api/profile')
        .then(res => 
            dispatch( {
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch( {
                //if there ins't a profile - this could be the result of a new account 
                //we just get an empty payload - where we say please add course!
                type: GET_PROFILE,
                payload: {}
            }) 
        )
}

//profile loading 
export const setProfileLoading = () => {
    return {
        //this will let the reducer know that its loading 
        //do not need to send the payload with this
        type: PROFILE_LOADING
    }
}

//clear profile 
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}