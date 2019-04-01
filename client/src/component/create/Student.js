import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Student extends React.Component {

  render () {
    return (
      <Card className='student-card'>
        <Link to='./'>
          <div className='logo-mantis'>
            <p className='company-name-instructor'> mantis </p>
          </div>
        </Link>

        <h1>Create a Student Profile</h1>
        <p className='student-id-info'>
          <u>Class ID Information</u>
        </p>
        <p className='student-info'>
          All students must be enrolled in an active class. To enroll in a
          class, please enter the class ID number that you were given by your
          instructor. Please note that the key and pincodeare case-sensitive. If
          you do not have this information, or the information you are entering
          appears to be incorrect, please contact your instructor.
        </p>
        <form>
          <TextField
            label='Class ID'
            className='class-id'
            type='Class ID'
            margin='normal'
          />
          <p className='student-user-info'>
            <u>User Information</u>
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
            defaultValue='Student'
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
            className='student-button'
            value='Submit'
            type='submit'
          >
            Create Account
          </Button>
        </form>
      </Card>
    )
  }
}

export default Student
