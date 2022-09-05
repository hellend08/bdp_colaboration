import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/" ><Button>Gestión</Button></NavLink>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Nuevo
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div>
                                <NavLink to="/Nuevo_Proyecto_Desarrollo">Proyecto Desarrollo</NavLink>
                            </div>
                            <div>
                                <NavLink to="/Nuevo_Proyecto_FVC">Proyecto FVC</NavLink>   
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="#pricing">Ayuda</Nav.Link>
                    <Nav.Link href="#pricing">Acerca de</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
  
export default Header;