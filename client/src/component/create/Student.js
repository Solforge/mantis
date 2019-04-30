import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Student extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      user_type:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // componentDidMount() { 
  //   if (this.props.auth.isAuthenticated) { 
  //     this.props.history.push('/dashboard');
  //   }
  // }

  componentWillReceiveProps(nextProps) { 
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  onChange = (e) => { 
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmit(e) {
    
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      confirmEmail: this.state.confirmEmail,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      user_type: 'student'
    };
  
    this.props.registerUser(newUser, this.props.history);
    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <Card className='student-card'>
        <Link to='./'>
          <div className='logo-mantis'>
            <p className='company-name-instructor'> mantis </p>
          </div>
        </Link>

        <h1>Create a Student Profile</h1>
        <form
          onSubmit={this.onSubmit}>
          <p className='student-user-info'>
            <u>User Information</u>
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
          />
          <TextField
            label='Confirm Email Address'
            className='student-email'
            type='emial'
            margin='normal'
            name='email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextField
            label='User Type'
            className='user-type'
            type='school'
            margin='normal'
            name='user_type'
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

Student.propTypes = { 
  registerUser: PropTypes.func.isRequired, 
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Student));
