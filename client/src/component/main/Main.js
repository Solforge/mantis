import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <AppBar
                position="static">
                <ToolBar className="header-bar">
                    <div className="logo-mantis-main">
                        <p className="name"> mantis </p>
                    </div>
                    <Button className="signin-button">
                        <Link className="link" to="/sign-in"> SIGN IN </Link>
                    </Button>
                </ToolBar>
            </AppBar>
        );
    }
};

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Header />
                
            </div>
        )
    }
}

export default Main; 