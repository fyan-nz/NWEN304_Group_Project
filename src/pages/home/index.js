import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import GridItem from '../../components/gridItem/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './styles.css';

// TODO: replace placeholder item with content from the servers
const placeholder = {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png',
    title: 'Card Title ',
    description: 'description'
};

const items = [];

// add items as swiper slides
for (let i = 0; i < 10; i++) {
    items.push(
        <SwiperSlide className='swiper-slide' key={i}>
            <GridItem item={{ id: i, ...placeholder }} />
        </SwiperSlide>
    );
}

SwiperCore.use([Navigation]);

export default function Home() {
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
                slidesPerView={5}
                spaceBetween={50}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}>
                {items}

                <div className='swiper-button-next'></div>
                <div className='swiper-button-prev'></div>

            </Swiper>

            {/* grid view of  product categories*/}
            <h4 className='mb-3 ml-3'>
                Categories
            </h4>
            <Container fluid className='home-grid'>
                <Row sm={1} md={3}>
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

                <Row>
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