import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Textarea from '../../../../../commons/forms/Textarea';
// import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadCuatroSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadCuatro = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadCuatroSchema),
        defaultValues: {
            comentarios: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">4.- Solicitud de la emisión del informe legal para persona y/o personalidad juridica</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                {/* <Row className="mt-3">
                    <Textarea name="comentarios" label="Comentarios" register={register} errors={errors} />
                </Row>
                <Row className="d-flex flex-row">
                    <Col>
                        <InputFile label="Solicitud" />
                    </Col>
                    <Col className="d-flex align-items-end">
                        <Button className="btn-sumit-w ms-auto" type="submit" variant="primary">
                            <i className="bi bi-send-fill"></i>
                        </Button>
                    </Col>
                </Row> */}
            </form>
        </>
    );
}

export default ActividadCuatro;