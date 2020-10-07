import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import GridItem from '../../components/gridItem/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './styles.css';

import { fetchRandomProducts } from './model';

// initialize swiper's elements that will be used in this component
SwiperCore.use([Navigation]);

export default function Home() {
    const [newArrivals, setNewArrivals] = useState([]);

    /**
     * fetches the list of new arrivals from the server
     */
    const getNewArrivals = async () => {
        const products = await fetchRandomProducts();
        const items = [];

        // add items as swiper slides
        for (const key of Object.keys(products)) {
            const item = products[key];
            items.push(
                <SwiperSlide className='swiper-slide' key={item._id}>
                    <GridItem item={{ id: item._id, ...item }} />
                </SwiperSlide>
            );
        }

        setNewArrivals(items);
    }

    useEffect(() => {
        getNewArrivals();
    }, [])

    return (
        <div>
            {/* page header */}
            <header className='page-header home-header'>
                <div className='content'>
                    <h4>New realeases</h4>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur dolores
                        sapiente est iste necessitatibus.
                    </p>

                    <Button className='mt-3' variant='outline-light' onClick={() => window.scroll({ top: window.innerHeight, behavior: 'smooth' })}>
                        Browse
                    </Button>
                </div>
            </header>

            {/* swiper that shows new arrivals */}
            <h4 className='mt-5 mb-3 ml-3'>
                New Arrivals
                </h4>

            <Swiper
                className='mb-5'
                slidesPerView={1}
                breakpoints={{
                    480: {
                        slidesPerView: 3
                    },
                    850: {
                        slidesPerView: 5
                    }
                }}
                spaceBetween={50}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}>

                {newArrivals}

                <div className='swiper-button-next'></div>
                <div className='swiper-button-prev'></div>

            </Swiper>

            {/* grid view of  product categories*/}
            <h4 className='mb-3 ml-3'>
                Categories
            </h4>
            <Container fluid className='home-grid'>
                <Row xs={1} md={3}>
                    <Col>
                        <Row className='img-container half-height tshirts-row' to='/products/t-shirts' as={NavLink}>
                            <h4>T-shirts</h4>
                        </Row>
                        <Row className='img-container half-height pants-row' to='/products/pants' as={NavLink}>
                            <h4>Pants</h4>
                        </Row>
                    </Col>

                    <Col>
                        <Row className='img-container full-height hoodie-row' to='/products/hoodies' as={NavLink}>
                            <h4>Hoodies</h4>
                        </Row>
                    </Col>

                    <Col>
                        <Row className='img-container half-height accessories-row' to='/products/accessories' as={NavLink}>
                            <h4>Accessories</h4>
                        </Row>
                        <Row className='img-container half-height suit-row' to='/products/suits' as={NavLink}>
                            <h4>Suits</h4>
                        </Row>
                    </Col>
                </Row>

                <Row xs={1} md={2}>
                    <Col className='img-container half-height socks-col' to='/products/socks' as={NavLink}>
                        <h4>Socks</h4>
                    </Col>

                    <Col className='img-container half-height underwear-col' to='/products/underwear' as={NavLink}>
                        <h4>Underwear</h4>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}