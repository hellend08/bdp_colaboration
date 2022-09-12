import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputDate from "../../../../../commons/forms/InputDate";
import Select from "../../../../../commons/forms/Select";
import InputFile from "../../../../../commons/forms/InputFile";
import Textarea from '../../../../../commons/forms/Textarea';
import "../style.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ActividadDosSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio';


const ActividadDos = () => {
    
    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadDosSchema),
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
                <Row className="gap-4">
                    <Col>
                        <Select name="compliance" label="Cumplimiento" options="Choose option" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <InputFile label="Nota conceptual"></InputFile>
                    </Col>
                </Row>
                <Row className="my-3 gap-4">
                    <Col> 
                        <InputDate name="startDate" label="Fecha inicio" type="date" register={register} errors={errors} />
                    </Col>
                    <Col> 
                        <InputDate name="endDate" label="Fecha fin" type="date"  register={register} errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Textarea name="observations" label="Observaciones / sugerencias" register={register} errors={errors} />
                </Row>
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row>
            </form>
        </>
      
    );
}

export default ActividadDos;