import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Textarea from '../../../../../commons/forms/Textarea';
// import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadDiecinueveSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadDiecinueve = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadDiecinueveSchema),
        defaultValues: {
            comentarios: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">19.- Elaboración de informe legal y contrato con la EE-DP</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                {/* <Row className="mt-3">
                    <Textarea name="comentarios" label="Comentarios" type="text" register={register} errors={errors} />
                </Row>
                <Row className="mb-3 gap-4">
                    <Col> 
                        <InputFile label="Informe legal" />
                    </Col>
                    <Col> 
                        <InputFile label="Contrato" />
                    </Col>
                </Row>
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row> */}
            </form>
        </>
    );
}

export default ActividadDiecinueve;