import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Textarea from '../../../../../commons/forms/Textarea';
import "./style.css"
// import pdf from "../../../../../../assets/document/HELENVASQUEZS-CV.pdf";
// import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadDVeintidosSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadDVeintidos = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadDVeintidosSchema),
        defaultValues: {
            comentarios: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">22.- Solicitar la elaboración del Acta de constitución y la Matriz de Interesados de la EE-PD</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                {/* <Row className="mt-3">
                    <Textarea name="comentarios" label="Comentarios" type="text" register={register} errors={errors} />
                </Row>
                <Row  className="d-flex flex-row gap-3 mb-3">
                    <Col>
                    <InputFile label="Comunicado" />
                    </Col>
                    <Col className="d-flex align-items-end justify-content-between">
                    <a className="btn-download mr-content" href={pdf} target="_blank" rel="noopener noreferrer" download="HELENVASQUEZS-CV.pdf">
                        <Button className="btn-download align-middle" variant="secondary" download="HELENVASQUEZS-CV.pdf">Acta de constitución
                            <i className="bi bi-cloud-arrow-down ml-3 fs-5 align-middle space-icon"></i>
                        </Button>
                    </a>
                    <a className="btn-download" href={pdf} target="_blank" rel="noopener noreferrer" download="HELENVASQUEZS-CV.pdf">
                        <Button className="btn-download align-middle gap-3" variant="secondary">Matriz interesados
                            <i className="bi bi-cloud-arrow-down ml-3 fs-5 align-middle space-icon"></i>
                        </Button>
                    </a>
                    </Col>
                </Row>
                <Row className="d-flex flex-row-reverse">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row> */}
            </form>
        </>
    );
}

export default ActividadDVeintidos;