import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TextareaForm from '../../../../../../commons/forms/TextareaForm';
import InputModalForm from "../../../../../../commons/forms/InputModalForm";

const schema = yup.object({
    comments: yup.string().required(),
  }).required();

const InicioActividadVeintitres = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">23.- Recepción y revisión del Acta de Constitución y la Matriz de Interesados por parte de los proponentes</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <TextareaForm name="comments" label="Comentarios" type="text" register={register} errors={errors} />
                </Row>
                <Row className="mb-3 gap-4">
                    <Col>
                        <InputModalForm name="act"  label="Acta constitución" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <InputModalForm name="matrix" label="Acta constitución" register={register} errors={errors} />
                    </Col>
                </Row>
                {/* <input type="submit" /> */}
                {/* <Button type="submit" variant="primary">V</Button> */}
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="w-25" type="submit" variant="primary">V</Button>

                </Row>
            </form>
        </>
      
    );
}

export default InicioActividadVeintitres;