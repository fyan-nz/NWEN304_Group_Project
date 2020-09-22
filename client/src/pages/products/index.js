import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Grid from '../../components/grid';
import { fetchProducts } from './model';

import './styles.css';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        // fetch items from the server
        this.fetchItems();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // refetch items from the server if the route has changed
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.fetchItems();
        }
    }

    async fetchItems() {
        const products = await fetchProducts(this.props.location.pathname.split('/')[2])
        this.setState({ products });
    }

    render() {
        return (
            <div>
                <header className='page-header browse-header'>
                    <div className='content'>
                        {/* get the products' category from the page's url */}
                        <h4>{this.props.location.pathname.split('/')[2]}</h4>
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur dolores
                            sapiente est iste necessitatibus.
                    </p>

                        <Button className='mt-3' variant='outline-light' onClick={() => window.scroll({ top: window.innerHeight, behavior: 'smooth' })}>
                            Browse
                    </Button>
                    </div>
                </header>

                <Grid products={this.state.products} />
            </div>
        )
    }
}