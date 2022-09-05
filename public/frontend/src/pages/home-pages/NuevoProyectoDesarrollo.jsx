import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import RegistroForm from '../../components/nuevo/desarrollo/inicio/RegistroForm';
import TabsDesa from '../../components/commons/layouts/TabsEtapas';

const NuevoProyectoDesarrollo = () => {
    return (
        <Row>
            <Col xs={12}>
                <TabsDesa />
            </Col>
            <Col xs={12}>
                <Nav variant="pills" defaultActiveKey="/home">
                  <Nav.Item>
                      <Nav.Link eventKey="link-1">Registro</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-2">Actividades</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="disabled" disabled>
                      Disabled
                      </Nav.Link>
                  </Nav.Item>
                </Nav>
            </Col>
            <Col xs={12} ><RegistroForm /></Col>
        </Row>
    );
}
  
export default  NuevoProyectoDesarrollo;