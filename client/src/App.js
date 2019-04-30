import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import './App.css'

//components 
import Main from './component/main/Main'
import SignIn from './component/signin/Signin'
import Create from './component/create/Create'
import Student from './component/create/Student'
import Instructor from './component/create/Instructor'
import Dashboard from './component/dashboard/Dashboard'
import Course from './'

//check for token 
if (localStorage.jwtToken) { 
  //set auth token header auth 
  setAuthToken(localStorage.jwtToken);
  //decode the token and get user info and expiration 
  const decoded = jwt_decode(localStorage.jwtToken);
  //set current action 
  //set user and is authetnticated 
  store.dispatch(setCurrentUser(decoded));

  //check for expired token 
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) { 
    //logout the user 
    store.dispatch(logoutUser());
    //TODO: clear current profile 
    store.dispatch(clearCurrentProfile());
    //redirect to login 
    window.location.href = '/sign-in';
  }
}

class App extends Component {
  render () {
    return (
      <div className='App'>
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/sign-in' component={SignIn} />
              <Route exact path='/create' component={Create} />
              <Route exact path='/student' component={Student} />
              <Route exact path='/instructor' component={Instructor} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Redirect to='/' />
            </Switch>
          </Router>          
      </Provider>
      </div>
    )
  }
}

export default App
