import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode';

//types
import { GET_ERRORS,
         SET_CURRENT_USER } from './types';


// Register user 
export const registerUser = (userData, history) => dispatch => {
    axios
    .post("/api/users/register", userData)
    .then(res => history.push('/sign-in'))
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })     
    );
};

// Login user 
export const loginUser = (userData) => dispatch => { 
    axios
    .post("/api/users/login", userData)
    .then(res => {
        //save to local storage 
        const { token } = res.data;
        //set token to local storage 
        localStorage.setItem('jwtToken', token);
        //set token to auth header 
        setAuthToken(token);
        //decode token to get user data 
        const decoded = jwt_decode(token);
        //set current user 
        dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })     
    );
};

//set current user via dispatch
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//log user out 
export const logoutUser = () => dispatch => {
    //remove the token from local storage 
    localStorage.removeItem('jwtToken');
    //remove the auth header for future requests
    setAuthToken(false);
    //set the current user to an empty object which is also set isAuthenticated to false 
    //the paylaod will just be an empty object and set isAuthenticated to false 
    dispatch(setCurrentUser({}));
}