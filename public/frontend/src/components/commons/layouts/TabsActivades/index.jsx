import Nav from 'react-bootstrap/Nav';

const TabsActividades = () => {

    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1">Registro</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Actividades</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
  
export default TabsActividades;