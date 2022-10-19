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
                        <NavDropdown title="Participantes" id="basic-nav-dropdown">
                            <NavDropdown.ItemText>
                                Dante David Pérez Pérez
                            </NavDropdown.ItemText>
                            <NavDropdown.ItemText>
                                Daniel Felipe Hurtado Giraldo
                            </NavDropdown.ItemText>
                            <NavDropdown.ItemText>
                                Tec de Monterrey
                            </NavDropdown.ItemText>
                            <NavDropdown.Divider />
                            <NavDropdown.ItemText>
                                Pagina perrona
                            </NavDropdown.ItemText>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
