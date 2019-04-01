import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  render () {
    return (
      <Card className='card'>
        <Link to='./'>
          <div className='logo-mantis-signin'>
            <p className='company-name-signin'> mantis </p>
          </div>
        </Link>
        <p>Sign in to Mantis</p>
        <form className='login-form'>
          <TextField
            label='Email Address'
            className='email-field'
            type='email'
            autoComplete='email'
            margin='normal'
            name='email'
          />
          <TextField
            label='Password'
            className='password-field'
            type='password'
            margin='normal'
            name='password'
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

export default SignIn
