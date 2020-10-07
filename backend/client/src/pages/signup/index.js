/**
 * Registration page
 */
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

class Signup extends Component {
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

                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            className="mb-2 mr-sm-2"
                            id="inlineFormCheck"
                            label="I agree to the terms & conditions"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <Form.Group className='mt-4'>
                        <Form.Text>
                            Already have an account? <Link to='/login'>Login</Link>
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

export default connect(mapStateToProps)(Signup);