import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentWillReceiveProps(nextProps) { 
    //is the user authenticated?
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) { 
      this.setState({errors: nextProps.errors});
    }

  }

  onChange = (e) => { 
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmit(e) { 
    e.preventDefault(); 
    const userData = {
      email: this.state.email, 
      password: this.state.password
    };

    this.props.loginUser(userData);

  }

  render () {
    return (
      <Card className='card'>
        <Link to='./'>
          <div className='logo-mantis-signin'>
            <p className='company-name-signin'> mantis </p>
          </div>
        </Link>
        <p>Sign in to Mantis</p>
        <form 
          className='login-form'
          onSubmit={this.onSubmit}>
          <TextField
            label='Email Address'
            className='email-field'
            type='email'
            autoComplete='email'
            margin='normal'
            name='email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextField
            label='Password'
            className='password-field'
            type='password'
            margin='normal'
            name='password'
            value={this.state.password}
            onChange={this.onChange}
          />
          <p className='newUser'>
            {' '}
            New User?
            <Link to='/Create'> Click Here </Link>
          </p>
          <Button
            variant='contained'
            size='small'
            className='login-button'
            color='primary'
            type='submit'
            value='Submit'
          >
            Sign In
          </Button>
        </form>
      </Card>
    )
  }
}


SignIn.propTypes = { 
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired, 
  errors: PropTypes.object.isRequired
}

const mapsStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapsStateToProps, { loginUser })(SignIn);
