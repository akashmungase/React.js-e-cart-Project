import { Card, Container } from "react-bootstrap";
import StarRating from "./starRating";

function ProductCard() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/assets/images/laptop.webp" />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        Pilates 14" Touch Screen Laptop 12GB Memory
                    </Card.Text>
                    <b className="text-primary">
                        $85.00
                    </b>
                    <StarRating />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ProductCard;