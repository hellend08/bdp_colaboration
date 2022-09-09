import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputDateForm from "../../../../../../commons/forms/InputDateForm";
import SelectForm from "../../../../../../commons/forms/SelectForm";
import TextareaForm from '../../../../../../commons/forms/TextareaForm';
import "../../style.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { InicioActividadDosSchema } from '../../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';


const InicioActividadDos = () => {

    // const [validated, setValidated] = useState(false);
    
    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(InicioActividadDosSchema),
        defaultValues: {
            compliance: "",
            startDate: "",
            endDate: "",
            observations: "",
        }
    })

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>2.- Análisis de la Nota Conceptual  del proyecto considerando el cumplimiento de políticias, salvaguardas ambientales,     criterios de inversión y otros del banco.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <SelectForm name="compliance" label="Cumplimiento" options="Choose option" register={register} errors={errors} />
                <Row className="my-3 gap-4">
                    <Col> 
                        <InputDateForm name="startDate" label="Fecha inicio" type="date" register={register} errors={errors} />
                    </Col>
                    <Col> 
                        <InputDateForm name="endDate" label="Fecha fin" type="date"  register={register} errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <TextareaForm name="observations" label="Observaciones / sugerencias" register={register} errors={errors} />
                </Row>
                {/* <input type="submit" /> */}
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row>
            </form>
        </>
      
    );
}

export default InicioActividadDos;