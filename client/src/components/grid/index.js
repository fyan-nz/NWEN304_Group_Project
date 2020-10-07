import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GridItem from '../gridItem/index';

export default function Grid(props) {
    /**
     * adds items into rows with 5 columns for each row
     */
    const getGridItems = () => {
        const gridItems = [];
        for (let i = 0; i < props.products.length; i += 4) {
            gridItems.push(
                <Row className="mb-5" lg={4} md={2} xs={1} key={props.products[i]._id}>
                    <Col>
                        <GridItem item={props.products[i]} />
                    </Col>
                    {/** check the index before adding the next four elements */}
                    {(i + 1 < props.products.length) &&
                        <Col>
                            <GridItem item={props.products[i + 1]} />
                        </Col>
                    }
                    {(i + 2 < props.products.length) &&
                        <Col>
                            <GridItem item={props.products[i + 2]} />
                        </Col>
                    }
                    {(i + 3 < props.products.length) &&
                        <Col>
                            <GridItem item={props.products[i + 3]} />
                        </Col>
                    }
                </Row>
            )
        }

        return gridItems;
    };

    return (
        <Container className="mt-5 container-fluid">
            {getGridItems()}
        </Container>
    )
}