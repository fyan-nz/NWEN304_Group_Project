import React, { Component } from 'react';
import { Card, Image, Container, Row, Col, Button } from 'react-bootstrap';

import { removeItem } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

import './styles.css';

class Cart extends Component {
    render() {
        return (
            <div>

                {/** display the number of items in the cart */}
                <h5 className='m-3'>
                    You have {this.props.cart.length} items in your cart
                  </h5>

                {/** display cart items inside of cards */}
                {
                    this.props.cart.map(item => (
                        <Card key={item.id} className='ml-5 mr-5 mb-3 cart-item'>
                            <Container>
                                <Row className="align-items-center">
                                    <Col xs={3}>
                                        <Image src={item.images[0]} />
                                    </Col>
                                    <Col xs={3}>
                                        <div>
                                            {item.productInfo.title}
                                        </div>

                                        <div>
                                            ${item.productInfo.price}
                                        </div>
                                    </Col>

                                    <Col xs={1} className="ml-auto" onClick={() => { this.props.dispatch(removeItem(item)) }}>
                                        <p className="cart-remove-item">
                                            X
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    ))
                }

                <Button className='ml-5'>
                    Proceed
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Cart);