import './horizontalNavbar.css';
import { Container, Nav, Navbar } from "react-bootstrap";

function HorizontalNavbar() {
    return (
        <div>
            <Navbar  bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#all">Shop All</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#computers">Laptops</Nav.Link>
                        <Nav.Link href="#Tables">Tables</Nav.Link>
                        <Nav.Link href="#Drons">Camera</Nav.Link>
                        <Nav.Link href="#Audio">Headphones</Nav.Link>
                        <Nav.Link href="#Mobile">Mobile</Nav.Link>
                        <Nav.Link href="#Home">T.V.</Nav.Link>
                        <Nav.Link href="#Wactes">Wactes</Nav.Link>
                        <Nav.Link href="#Sale">Sale</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default HorizontalNavbar;