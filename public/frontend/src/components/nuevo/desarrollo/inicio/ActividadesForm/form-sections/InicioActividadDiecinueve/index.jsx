import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import TextareaForm from '../../../../../../commons/forms/TextareaForm';

const schema = yup.object({
    comments: yup.string().required(),
  }).required();

const InicioActividadDiecinueve = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">19.- Elaboración de informe legal y contrato con la EE-DP</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <TextareaForm name="comments" label="Comentarios" type="text" register={register} errors={errors} />
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

export default InicioActividadDiecinueve;