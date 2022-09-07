import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RegistroForm from './RegistroForm';
import ActividadesForm from './ActividadesForm';
import TabsActividades from '../../../commons/layouts/TabsActivades';

const Inicio = () => {

    return (
        <Row>
            <Col xs={12}>
                <TabsActividades/>
            </Col>
            <Col xs={12} ><RegistroForm /></Col> 
            <Col xs={12} ><ActividadesForm /></Col>
        </Row>
    );
}
  
export default Inicio;