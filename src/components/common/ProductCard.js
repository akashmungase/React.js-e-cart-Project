import { Card, Container } from "react-bootstrap";
import Rating from "./starRating";
import { useEffect } from "react";

function ProductCard({ Props }) {

    useEffect(() => {
        console.log("Props", Props);
    }, [Props]);

    return (
        <Container className="text-center mt-4">
            {
                Props.map((item, i) =>
                    <Card style={{ width: '18rem' }} key={i} className="d-inline-block m-2">
                        <Card.Img variant="top" src={item?.image_url} style={{width: '285px', height: '232px'}}/>
                        <Card.Body>
                            <Card.Text>
                                {item?.product_desc}
                            </Card.Text>
                            <b style={{ color: '#751fff' }}>
                                {item?.price}
                            </b>
                            <div>
                                <Rating value={item?.rating} max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                )
            }

        </Container>
    )
}

export default ProductCard;