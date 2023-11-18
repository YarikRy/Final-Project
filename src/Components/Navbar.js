import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {NavLink} from 'react-router-dom'


export default function NavbarComponent(){
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid='sm'>
                <Navbar.Brand as={NavLink} to="/">Social</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/friends">Friends</Nav.Link>
                        <Nav.Link as={NavLink} to="/posts">Posts</Nav.Link>\
                        <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
                    </Nav>
            </Container>
      </Navbar>
    )
}