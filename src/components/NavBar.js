import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Smart Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Link Divice</Nav.Link>
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Dante David Pérez Pérez
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Daniel Felipe Hurtado Giraldo
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Tec de Monterrey
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Pagina perrona
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
