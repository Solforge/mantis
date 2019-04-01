import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css'

import Main from './component/main/Main'
import SignIn from './component/signin/Signin'
import Create from './component/create/Create'
import Student from './component/create/Student'
import Instructor from './component/create/Instructor'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/student' component={Student} />
            <Route exact path='/instructor' component={Instructor} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
