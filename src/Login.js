import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from './Auth';

class Login extends Component {

    state = {
        isRedirect: false
    }

    login = () => {
        Auth.login(() => {
            this.setState({
                isRedirect: true
            })
        })
    }

    render() {
        if(Auth.isLogin) return <Redirect to="/" />
        let { from } = this.props.location.state || { from: { pathname: '/' } }
        if(this.state.isRedirect) return <Redirect to={ from }/>

        return (
            <div>
                Please login
                <button onClick={ this.login } className="btn btn-primary">Login</button>
            </div>
        )
    }

}

export default Login