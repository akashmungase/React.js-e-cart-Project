import Deals from '../Deals/deals';
import Services from '../Services/services';
import './home.css';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container fluid className="home-background">
        <Container>
          <Row>
            <Col >
              <div className='home-text'>
                <Badge bg="danger">Best Prices</Badge>
                <h1>
                  Incredible Prices on
                  <br />
                  All Yours Favorite Items
                </h1>
                <p>
                  Get more for less on selected brands
                </p>
                <Button variant="primary">Shop Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Deals />
      <Services />
    </>
  );
}

export default Home;