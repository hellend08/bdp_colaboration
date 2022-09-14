import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Select from "../../../../../commons/forms/Select";
import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadDieciseisSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadDieciseis = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(ActividadDieciseisSchema)
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>16.- Recepción de resolución donde se apruebe el contrato con el Financiador por parte de Directorio y solicitud de la gestión de firmas</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3">
                    <Col>
                        <Select name="cumplimiento" label="Cumplimiento" options={["Choose option"]} register={register} errors={errors}/>
                    </Col>
                    <Col>
                        <InputFile label="Resolución" />
                    </Col>
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

export default ActividadDieciseis;