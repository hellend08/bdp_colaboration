import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RegistroForm from './RegistroForm';
import ActividadesForm from './ActividadesForm';
import TabsActividades from '../../../commons/layouts/TabsActivades';
import { activities } from '../../../../constants/desarrollo/inicio';
import { activitiesStore } from '../../../../store/commonsStore';

const Inicio = () => {
    const { activity, activityEnabled , selectActivity, enableActivity } = activitiesStore();
    //const [activity, setActivity] = useState("inicio-registro");

    useEffect(() => {
        selectActivity("inicio-registro");
        enableActivity("")
    }, []);

    return (
        <Row>
            <Col xs={12}>
                <TabsActividades activities={activities}  activityEnabled={activityEnabled} activity={activity} selectActivity={selectActivity}/>
            </Col>
            <Col xs={12} >
            {
                activity === "inicio-registro" ?
                <RegistroForm />
                : <ActividadesForm />
            }
            </Col>
        </Row>
    );
}
  
export default Inicio;