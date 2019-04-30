import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ToolBar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


class Header extends React.Component {
    render () {
      return (
        <AppBar position='static'>
          <ToolBar className='header-bar'>
            <div className='logo-mantis-main'>
              <p className='name'> mantis </p>
            </div>
            <Button className='signin-button'>
              <Link 
                className='link' 
                to='/'>
               Logout
              </Link>
            </Button>
          </ToolBar>
        </AppBar>
      )
    }
  }

  Header.propTypes= {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }

  const mapStateToProps = (state) => ({
    auth: state.auth
  })

  export default connect( mapStateToProps, {logoutUser} )(Header); 