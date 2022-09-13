import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Select from "../../../../../commons/forms/Select";
import Textarea from '../../../../../commons/forms/Textarea';
import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadNueveSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadNueve = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadNueveSchema),
        defaultValues: {
            observacion: "",
            recomendacion: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>9.- Evaluación y recomendación de aprobación a Directorio</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Select name="observacion" label="Observaciones" options="Choose option" register={register} errors={errors}/>
                <Row className="my-3 gap-4">
                    <Col> 
                        <InputFile label="Acta de comité" />
                    </Col>
                    <Col> 
                        <InputFile label="Acta de directorio" />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Textarea name="recomendacion" label="Recomendaciones" register={register} errors={errors} />
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

export default ActividadNueve;