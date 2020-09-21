import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import { addItem } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

class GridItem extends Component {

    addItemToCart() {
        const { item, cart } = this.props;

        // check if the same item has been added to the cart earlier
        const prevItem = cart.find(element => element.id === item.id);

        if (prevItem) {
            // add the item with a different id
            this.props.dispatch(addItem({
                ...item,
                id: `${item.id}_${Date.now()}`
            }));
        } else {
            this.props.dispatch(addItem(item));
        }
    }

    render() {
        const { item } = this.props;
        return (
            <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.addItemToCart()}>Add to Cart</Button>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(GridItem);