import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Ecommerce Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <NavDropdown title="Browse" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products/cat1">Product Category 1</NavDropdown.Item>
                            <NavDropdown.Item href="/products/cat2">Product Category 2</NavDropdown.Item>
                            <NavDropdown.Item href="/products/cat3">Product Category 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function stateToProps(state) {
    return state;
}

export default connect(stateToProps)(Header);