import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles.css';

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
                id: `${item._id}_${Date.now()}`
            }));
        } else {
            this.props.dispatch(addItem(item));
        }
    }

    render() {
        const { images } = this.props.item;
        const { title, price } = this.props.item.productInfo;
        return (
            <Card className='grid-item-container h-100'>
                <Card.Img variant="top" src={images[0]} />
                <Card.Body>
                    <Card.Title className='title'>{title}</Card.Title>
                    <Card.Text>
                        ${price}
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