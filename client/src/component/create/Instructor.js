import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Instructor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      joinKey: '',
      first_name: '',
      last_name: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      user_type: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    const newUser = {
      joinKey: this.state.joinKey,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      confirmEmail: this.state.confirmEmail,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      user_type: 'instructor'
    }
    axios
    .post("/api/users/register", newUser)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data));
  }

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
        <form onSubmit={this.onSubmit}>
          <TextField
            label='Join Key'
            className='join-key'
            type='Class ID'
            margin='normal'
            name='joinKey'
            value={this.state.joinKey}
            onChange={this.onChange}
          />

          <p className='instructor-id-info'>
            <u>User information</u>
          </p>

          <TextField
            label='First Name'
            className='student-first-name'
            type='First Name'
            margin='normal'
            name='first_name'
            value={this.state.first_name}
            onChange={this.onChange}
          />
          <TextField
            label='Last Name'
            className='student-last-name'
            type='Last Name'
            margin='normal'
            name='last_name'
            value={this.state.last_name}
            onChange={this.onChange}
          />
          <TextField
            label='Email Address'
            className='student-email'
            type='emial'
            margin='normal'
            name='email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextField
            label='Confirm Email Address'
            className='student-email'
            type='emial'
            margin='normal'
            name='confirmEmail'
            value={this.state.confirmEmail}
            onChange={this.onChange}
          />
          <TextField
            label='User Type'
            className='user-type'
            type='school'
            margin='normal'
            name='user_type'
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
            name='password'
            value={this.state.password}
            onChange={this.onChange}
          />
          <TextField
            label='Confirm Password'
            className='student-password'
            type='password'
            margin='normal'
            name='confirmPassword'
            value={this.state.confirmPassword}
            onChange={this.onChange}
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
