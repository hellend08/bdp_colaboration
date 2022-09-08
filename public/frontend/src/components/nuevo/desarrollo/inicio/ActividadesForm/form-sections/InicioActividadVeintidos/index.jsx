import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import TextareaForm from '../../../../../../commons/forms/TextareaForm';
import "./style.css"

const schema = yup.object({
    comments: yup.string().required(),
  }).required();

const InicioActividadDVeintidos = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">22.- Solicitar la elaboración del Acta de constitución y la Matriz de Interesados de la EE-PD</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <TextareaForm name="comments" label="Comentarios" type="text" register={register} errors={errors} />
                </Row>
                <Row  className="d-flex flex-row-reverse gap-3 pr-3 mb-3">
                    <Button className="btn-download align-middle" variant="secondary">Acta de constitución
                        <i className="bi bi-cloud-arrow-down ml-3 fs-5 align-middle space-icon"></i>
                    </Button>
                    <Button className="btn-download align-middle gap-3" variant="secondary">Matriz interesados
                        <i className="bi bi-cloud-arrow-down ml-3 fs-5 align-middle space-icon"></i>
                    </Button>
                </Row>
                {/* <input type="submit" /> */}
                {/* <Button type="submit" variant="primary">V</Button> */}
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>

                </Row>
            </form>
        </>
      
    );
}

export default InicioActividadDVeintidos;