import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect, Route}  from 'react-router-dom';

import {signInAction} from '../../store/actions/authAction';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        redirectToReferrer : false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    }
    render() {
        const {authError, auth} = this.props;
        const {redirectToReferrer} = this.state;
        const {from} = this.props.location.state || {from : {pathname : '/'}};

        if(auth.uid) {
           return <Redirect to='/' />
        }
        console.log(this.props);
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => dispatch(signInAction(creds))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)