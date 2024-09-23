import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarComponents=()=>{
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Calculons !</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Lien</Nav.Link>
            <NavDropdown title="En savoir plus" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">En fait</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Non
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ya rien</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                de plus
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>;
}

export default NavBarComponents;