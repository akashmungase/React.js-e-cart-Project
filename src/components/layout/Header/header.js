import './header.css';
import { Form, Col, Container, InputGroup, Row } from 'react-bootstrap';
import feather from 'feather-icons';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser as faRegularCircleUser } from '@fortawesome/free-regular-svg-icons';
import HorizontalNavbar from '../Horizontal/horizontalNavbar';

function Header() {

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className='header'>
            <Container className='pt-3'>
                <Row>
                    <Col md='2' className='cursor-pointer'>
                        <h3>
                            TechSheld
                        </h3>
                    </Col>
                    <Col md='8'>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-icon"
                            />
                            <InputGroup.Text id="search-icon" className='cursor-pointer'>
                                <i data-feather="search"></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col className='text-end cursor-pointer' md='1' >
                        <FontAwesomeIcon icon={faRegularCircleUser} size="2x" />
                    </Col>
                    <Col md='1'>
                        <i data-feather="shopping-cart"></i>
                    </Col>
                </Row>
            </Container>
            <HorizontalNavbar />
        </div>
    );
}

export default Header;
