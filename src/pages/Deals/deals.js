import './deals.css';
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function Deals() {
    return (
        <Container>
            <Row className='py-5'>
                <Col md='6'>
                    <div class='image-container'>
                        <div className='deal-1-text'>
                            <span>Holiday Deals</span   >
                            <h2>
                                Up to <br />
                                30% off
                            </h2>
                            <p>Selected Smartphone Brands</p>
                            <Button variant='light'>Shop</Button>
                        </div>
                        <Image className='deal-1' src="./assets/images/deal-1.webp" />
                    </div>
                </Col>
                <Col md='6'>
                    <div class='image-container'>
                        <div className='deal-1-text'>
                            <span>Just In</span>
                            <h2>
                                Take Your <br />
                                Sound <br />
                                Anywhere
                            </h2>
                            <p>Top Headphone Brands</p>
                            <Button variant='light'>Shop</Button>
                        </div>
                        <Image className='deal-1' src="./assets/images/deal-2.webp" />
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Deals;