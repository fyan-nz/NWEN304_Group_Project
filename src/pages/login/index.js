/**
 * Login page
 */
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

class Login extends Component {
    render() {

        // redirect the client to the landing page if they are already logged in
        if (this.props.auth) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <Form className='login-form-container'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

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