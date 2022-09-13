import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Textarea from '../../../../../commons/forms/Textarea';
import InputFileModal from "../../../../../commons/forms/InputFileModal";
import { ActividadVeintitresSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';
import ActaConstitucionModal from "../../modals/ActaConstitucionalModal";
import MatrizInteresadosModal from "../../modals/MatrizInteresadosModal";

const ActividadVeintitres = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadVeintitresSchema),
        defaultValues: {
            comentarios: "",
            actaConst: "",
            matrizInt: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">23.- Recepción y revisión del Acta de Constitución y la Matriz de Interesados por parte de los proponentes</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <Textarea name="comentarios" label="Comentarios" type="text" register={register} errors={errors} />
                </Row>
                <Row className="mb-3 gap-4">
                    <Col>
                        <InputFileModal name="actaConst"  label="Acta constitución" register={register} errors={errors} modal="acta-constitucion" />
                    </Col>
                    <Col>
                        <InputFileModal name="matrizInt" label="Matriz interesados" register={register} errors={errors} modal="matriz-interesados" />
                    </Col>
                </Row>
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row>
            </form>
            <ActaConstitucionModal />
            <MatrizInteresadosModal />
        </>
      
    );
}

export default ActividadVeintitres;