import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Registro from './Registro';
import Actividades from './Actividades';
import TabsActividades from '../../../commons/layouts/TabsActivades';
import { tabsActividades } from '../../../../constants/nuevo/desarrollo/inicio';
import { tabsActividadesStore } from '../../../../store/nuevo/desarrollo/inicio';

const Inicio = () => {
    const { activity, activityEnabled , selectActivity, enableActivity } = tabsActividadesStore();
    //const [activity, setActivity] = useState("inicio-registro");

    useEffect(() => {
        selectActivity("inicio-registro");
        enableActivity("")
    }, []);

    return (
        <Row>
            <Col xs={12}>
                <TabsActividades activities={tabsActividades}  activityEnabled={activityEnabled} activity={activity} selectActivity={selectActivity}/>
            </Col>
            <Col xs={12} >
            {
                activity === "inicio-registro" ?
                <Registro />
                : <Actividades />
            }
            </Col>
        </Row>
    );
}
  
export default Inicio;