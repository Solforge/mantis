import axios from 'axios';
import { GET_ERRORS, ADD_COURSE } from './types';

export const addPost = courseData => dispatch => {
    
    axios
        .post('api/course', courseData)
        .then(res => 
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: error.res.data
            })    
        )
};