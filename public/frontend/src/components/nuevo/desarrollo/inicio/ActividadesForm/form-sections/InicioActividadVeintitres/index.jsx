import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TextareaForm from '../../../../../../commons/forms/TextareaForm';
import InputModalForm from "../../../../../../commons/forms/InputModalForm";
import { InicioActividadVeintitresSchema } from '../../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';


const InicioActividadVeintitres = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(InicioActividadVeintitresSchema),
        defaultValues: {
            comentarios: "",
            actaCons: "",
            matriz: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">23.- Recepción y revisión del Acta de Constitución y la Matriz de Interesados por parte de los proponentes</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <TextareaForm name="comentarios" label="Comentarios" type="text" register={register} errors={errors} />
                </Row>
                <Row className="mb-3 gap-4">
                    <Col>
                        <InputModalForm name="actaCons"  label="Acta constitución" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <InputModalForm name="matriz" label="Matriz interesados" register={register} errors={errors} />
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

export default InicioActividadVeintitres;