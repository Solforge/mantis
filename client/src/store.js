import { createStore, applyMiddleware, compose } from 'redux';
//middleware
import thunk from 'redux-thunk';
//we will have multiple reducers
    //helps specify how the applications state changes in response to actions
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store; 