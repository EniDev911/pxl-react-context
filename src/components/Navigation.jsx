import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" className="mb-4">
            <Container fluid>
                <Nav className="mx-auto">
                    <Link to="/" className='text-decoration-none me-2'>Home</Link>
                    <Link to="favoritos" className='text-decoration-none'>Favoritos</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;