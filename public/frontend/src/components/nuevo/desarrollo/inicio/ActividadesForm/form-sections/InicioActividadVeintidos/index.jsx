import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import TextareaForm from '../../../../../../commons/forms/TextareaForm';
import "./style.css"
import pdf from "../../../../../../../assets/document/HELENVASQUEZS-CV.pdf";
import { InicioActividadDVeintidosSchema } from '../../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';


const InicioActividadDVeintidos = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(InicioActividadDVeintidosSchema),
        defaultValues: {
            comentarios: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">22.- Solicitar la elaboración del Acta de constitución y la Matriz de Interesados de la EE-PD</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <TextareaForm name="comentarios" label="Comentarios" type="text" register={register} errors={errors} />
                </Row>
                <Row  className="d-flex flex-row-reverse gap-3 pr-3 mb-3">
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

export default InicioActividadDVeintidos;