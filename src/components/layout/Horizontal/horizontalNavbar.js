import { Container } from 'react-bootstrap';
import './horizontalNavbar.css';
// import { Container, Nav, Navbar } from "react-bootstrap";

// function HorizontalNavbar() {
//     return (
//         <div>
//             <Navbar  bg="light" data-bs-theme="light">
//                 <Container>
//                     <Navbar.Brand href="#all">Shop All</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link to="laptops">Laptops</Nav.Link>
//                         <Nav.Link href="#Tables">Tables</Nav.Link>
//                         <Nav.Link href="#Drons">Camera</Nav.Link>
//                         <Nav.Link href="#Audio">Headphones</Nav.Link>
//                         <Nav.Link href="#Mobile">Mobile</Nav.Link>
//                         <Nav.Link href="#Home">T.V.</Nav.Link>
//                         <Nav.Link href="#Wactes">Wactes</Nav.Link>
//                         <Nav.Link href="#Sale">Sale</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default HorizontalNavbar;


import { NavLink } from "react-router-dom";

function HorizontalNavbar() {
    return (
        <Container>
            <ul className='nav-bar'>
                <li><NavLink className="nav-link" to={'/'}>Shop All</NavLink></li>
                <li><NavLink className="nav-link" to={'/laptops'}>laptops</NavLink></li>
                <li><NavLink className="nav-link" to={'/'}>Tables</NavLink></li>
                <li><NavLink className="nav-link" to={'/'}>Camera</NavLink></li>
                <li><NavLink className="nav-link" to={'/'}>Headphones</NavLink></li>
                <li><NavLink className="nav-link" to={'/'}>Mobile</NavLink></li>
                <li><NavLink className="nav-link" to={'/'}>T.V.</NavLink></li>
                <li><NavLink className="nav-link" to={'/'}>Wactes</NavLink></li>
                <li><NavLink className="nav-link" to={'/'}>Sale</NavLink></li>
            </ul>

        </Container>
    )
}

export default HorizontalNavbar;