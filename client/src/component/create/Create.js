import React from 'react'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'

class Create extends React.Component {
  render () {
    return (
      <Card className='create-card'>
        <Link to='/'>
          <div className='logo-mantis'>
            <p className='company-name-create'> mantis </p>
          </div>
        </Link>
         <h1>Create a User Profile</h1>
        <p className='create-info-text'>
          All users must have a user profile to the service. Please select how
          you will be using Mantis
        </p>
        <p className='create-student'>
          <Link to='../Student'>Student</Link>
        </p>
        <p className='create-instructor'>
          <Link to='../Instructor'>Intructor</Link>
        </p>
        <p className='create-click-here'>
          Existing User?
          <Link to='./sign-in'> Click Here </Link>
        </p>
      </Card>
    )
  }
}

export default Create
