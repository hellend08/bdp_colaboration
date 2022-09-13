import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Select from "../../../../../commons/forms/Select";
import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadVeintiseisSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadVeintiseis = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadVeintiseisSchema),
        defaultValues: {
            cumplimiento: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>26.- Rechazo de la Nota Conceptual. Comunicar al proponente los motivos del rechazo</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3">
                    <Select name="cumplimiento" label="Cumplimiento" options="Choose option" register={register} errors={errors}/>
                </Row>
                <Row className="my-3 gap-4">
                    <Col> 
                        <InputFile label="Medio probatorio" />
                    </Col>
                    <Col> 
                        <InputFile label="Comunicado" />
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

export default ActividadVeintiseis;