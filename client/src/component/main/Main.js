import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ToolBar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'

import image from '../../resources/image.png';


class Header extends React.Component {
  render () {
    return (
      <AppBar position='static'>
        <ToolBar className='header-bar'>
          <div className='logo-mantis-main'>
            <p className='name'> mantis </p>
          </div>
          <Button className='signin-button'>
            <Link className='link' to='/sign-in'>
              SIGN IN
            </Link>
          </Button>
        </ToolBar>
      </AppBar>
    )
  }
}

class Body extends React.Component {
  render () {
    return(
      <div className='body-container'>
        <h1>Code With Originality</h1>
        <p>The world's most effective source code plagiarism checking solution.</p>
        
        <div className="body-button-container">
          <Button 
            variant="contained" 
            color="secondary"
          >
            Get Started 
          </Button>
        </div>
        
        
        <div className="img-container">
          <div className="avatar">
              <img src={ image } alt="body-art" />
          </div>
        </div>
      </div>
    )
  }
}

class Main extends React.Component {
  render () {
    return (
      <div className='Main'>
        <Header />
        <Body />
      </div>
    )
  }
}

export default Main;
