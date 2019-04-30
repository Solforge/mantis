import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Header from '../main/Header';
import Button from '@material-ui/core/Button'

class Dashboard extends React.Component { 

    //lifecyle component 
    componentDidMount() {   
        this.props.getCurrentProfile();
    }
    render() { 

        const { user } = this.props.auth;
        const userType = user.user_type;

        return (
            <div className="dashboard-container">
                <Header />
                <div className="dashboard-top-bar">
                    <p className="dashboard"> Dashboard </p>   
                    <p className="dashboard-welcome"> Welcome {user.first_name} {user.last_name} </p>
                    <p className="dashboard-usertype"> ({user.user_type} Account)</p>
                </div>
                <Button
                    variant='outlined'
                    size='small'
                    className='dashboard-button'
                >
                ADD COURSE 
                </Button>

                <div>
                
                </div>


            </div>

            
        );
    }
}

Dashboard.propTypes= { 
    getCurrentProfile: PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired, 
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile, 
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard); 