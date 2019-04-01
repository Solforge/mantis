import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Instructor extends React.Component {
  render () {
    return (
      <Card className='instructor-card'>
        <Link to='./'>
          <div className='logo-mantis'>
            <p className='company-name-instructor'> mantis </p>
          </div>
        </Link>
        <h1>Create an Instructor Profile</h1>
        <p className='instructor-id-info'>
          <u>Join Key Information</u>
        </p>
        <p className='instructor-info'>
          To create an instructor account, please enter the Join Key that you
          were given by your Mantis representative.
        </p>
        <form>
          <TextField
            label='Join Key'
            className='join-key'
            type='Class ID'
            margin='normal'
          />

          <p className='instructor-id-info'>
            <u>User information</u>
          </p>

          <TextField
            label='First Name'
            className='student-first-name'
            type='First Name'
            margin='normal'
          />
          <TextField
            label='Last Name'
            className='student-last-name'
            type='Last Name'
            margin='normal'
          />
          <TextField
            label='Email Address'
            className='student-email'
            type='emial'
            margin='normal'
          />
          <TextField
            label='Confirm Email Address'
            className='student-email'
            type='emial'
            margin='normal'
          />
          <TextField
            label='User Type'
            className='user-type'
            type='school'
            margin='normal'
            defaultValue='Instructor'
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            label='Password'
            className='student-password'
            type='password'
            margin='normal'
          />
          <TextField
            label='Confirm Password'
            className='student-password'
            type='password'
            margin='normal'
          />
          <Button
            variant='contained'
            size='small'
            color='primary'
            className='instructor-button'
            type='submit'
            value='Submit'
          >
            Create Account
          </Button>
        </form>
      </Card>
    )
  }
}

export default Instructor
