import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Toast } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './styles.css';

import { connect } from 'react-redux';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // handles displaying the toast message to notify the user that they have added an item successfully to the cart
            displayToast: false,
            // checkes if the client has scrolled down in the page
            scrolled: false,
            // checks if the nav bar should have a fixed position or not
            isFixed: true
        }
    }

    componentDidMount() {
        this.updateWindowListener();
    }

    componentDidUpdate(oldProps, oldState, snapshot) {
        if (oldProps.cart.length < this.props.cart.length) {
            // only display the toast message if the number of items in the cart has increased
            this.setState({ displayToast: true });
        }
        if (oldProps.location.pathname !== this.props.location.pathname) {
            // add/remove the window's scroll listener if the current route has changed
            this.updateWindowListener();
        }
    }

    /**
     * adds/removes the windows scroll listener based on the current route.
     */
    updateWindowListener() {
        // routes that do not have a window listener, and their nav bar should not be fixed
        const routesWithNoFixedNavBar = ["login", "signup", "cart", "404"];
        // the current route
        const currentRoute = this.props.location.pathname.substring(1);

        // check if the name current route exists in the list above
        if (!routesWithNoFixedNavBar.includes(currentRoute)) {
            // add the scroll listener
            window.addEventListener('scroll', () => this.onScrollEventListener());
            this.setState({ isFixed: true });
        } else {
            // remove the scroll listener
            window.removeEventListener('scroll', () => this.onScrollEventListener());
            this.setState({ isFixed: false });
        }
    }

    /**
     * changes the state of the component based on the vertical scroll vlaue.
     */
    onScrollEventListener() {
        const scrollValue = window.scrollY;
        if (scrollValue === 0) {
            this.setState({ scrolled: false });
        } else if (!this.state.scrolled) {
            this.setState({ scrolled: true });
        }
    }

    /**
     * returns the props of the Navbar component.based on its current state.
     */
    getNavBarProps() {
        if (this.state.isFixed) {
            return {
                bg: this.state.scrolled ? "white" : "transparent",
                fixed: "top",
                variant: this.state.scrolled ? 'light' : 'dark'
            }
        } else {
            return {
                bg: "white",
                variant: "light"
            }
        }
    }

    render() {
        return (
            <Navbar {...this.getNavBarProps()} expand="lg">
                <Navbar.Brand to="/" as={NavLink}>Ecommerce Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <NavDropdown title="Browse" id="basic-nav-dropdown">
                            <NavDropdown.Item to="/products/t-shirts" as={NavLink}>T-shirts</NavDropdown.Item>
                            <NavDropdown.Item to="/products/pants" as={NavLink}>Pants</NavDropdown.Item>
                            <NavDropdown.Item to="/products/hoodies" as={NavLink}>Hooides</NavDropdown.Item>
                            <NavDropdown.Item to="/products/accessories" as={NavLink}>Accessories</NavDropdown.Item>
                            <NavDropdown.Item to="/products/suits" as={NavLink}>Suits</NavDropdown.Item>
                            <NavDropdown.Item to="/products/socks" as={NavLink}>Socks</NavDropdown.Item>
                            <NavDropdown.Item to="/products/underwear" as={NavLink}>Underwear</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/cart" as={NavLink}>Cart</Nav.Link>
                        <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Toast className="toast" show={this.state.displayToast} delay={3000} onClose={() => this.setState({ displayToast: false })} animation={false} autohide>
                    <p>
                        Item has been added to your cart
                     </p>
                </Toast>
            </Navbar>
        )
    }
}

function stateToProps(state) {
    return state;
}

export default connect(stateToProps)(withRouter(Header));