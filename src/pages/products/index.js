import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Grid from '../../components/grid';

import './styles.css';

export default function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const items = [];

        // placeholder
        for (let i = 0; i < 78; i++) {
            items.push({
                id: i,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png',
                title: 'Card Title ' + i,
                description: 'description'
            });
        }

        setProducts(items);
    }, []);

    return (
        <div>
            <header className='page-header browse-header'>
                <div className='content'>
                    {/* get the products' category from the page's url */}
                    <h4>{props.location.pathname.split('/')[2]}</h4>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur dolores
                        sapiente est iste necessitatibus.
                    </p>

                    <Button className='mt-3' variant='outline-light' onClick={() => window.scroll({ top: window.innerHeight, behavior: 'smooth' })}>
                        Browse
                    </Button>
                </div>
            </header>

            <Grid products={products} />
        </div>
    )
}