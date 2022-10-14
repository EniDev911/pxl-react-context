import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" className="mb-4">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className="mx-auto">
                        <Link to="/" className='text-decoration-none me-lg-2 my-sm-2 my-lg-0'>Home</Link>
                        <Link to="favoritos" className='text-decoration-none'>Favoritos</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation;