/**
 * Login page
 */
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

import { login } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

    }


    handleSubmit(event) {



        event.preventDefault();

    }

    /**
     * handles user's data after they login with Google
     */
    handleGoogleLogin(response) {
        this.props.dispatch(login(response));
    }

    /**
     * sends the user's inut to the server
     */
    submitForm(e) {
        //Gets information email and password from the form
        var email = document.getElementById("formBasicEmail").value;
        var password = document.getElementById("formBasicPassword").value
        //sends post request to the express server with the email and password
        fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),

        })//if the server sends back a 401 error that means the password does not match
            .then(function (response) {
                if (response.status === 401) {
                    alert("email or password is incorrect")
                }
                if(response.status === 200){
                    console.log("logged in successfully")
                    //ToDo: On a 200 OK response the page should be redirected to Home 
                
                }
               else{
                   console.log("error")
               }
            })
            


        e.preventDefault();
    }

    render() {
        // redirect the client to the landing page if they are already logged in
        if (this.props.auth) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <Form className='login-form-container' >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(e) => this.submitForm(e)} block>
                        Submit
                    </Button>

                    {/* Google OAauth2 */}
                    <GoogleLogin
                        clientId="571513238390-v4v9lkk9u3n5ul535i8jmjsrodee9h2t.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={(e) => this.handleGoogleLogin(e)}
                        onFailure={(e) => alert(e.error)}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <div className="mt-3 w-100 d-flex justify-content-center" onClick={() => renderProps.onClick()}>
                                <img src={require('../../assets/googleSignInButton.png')} className="btn" alt="Google Login" />
                            </div>
                        )}
                    />



                    <Form.Group className='mt-4'>
                        <Form.Text>
                            Need an account? <Link to='/signup'>Sign up</Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Login);