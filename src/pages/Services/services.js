import './services.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Services() {
    return (
        <Container className='pb-5'>
            <Row className='bg-white p-3'>
                <Col className='container-box'>
                    <Image src="./assets/images/pickup.png" className='images-style' />
                    <p className='p-3 font-larger'>Curb-side <br /> pickup</p>
                </Col>
                <Col className='container-box'>
                    <Image src="./assets/images/free_shipping.png" className='images-style' />
                    <p className='p-3 font-larger'>Free shipping on <br />orders over $50</p>
                </Col>
                <Col className='container-box'>
                    <Image src="./assets/images/low_prices.png" className='images-style' />

                    <p className='p-3 font-larger'>Low prices <br />guaranteed</p>
                </Col>
                <Col className='container-box'>
                    <Image src="./assets/images/available_24_7.png" className='images-style' />

                    <p className='p-3 font-larger'>Available to <br />you 24/7</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Services;
