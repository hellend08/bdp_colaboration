import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import TextareaForm from '../../../../../../commons/forms/TextareaForm';

const schema = yup.object({
    comments: yup.string().required(),
  }).required();

const InicioActividadCuatro = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">4.- Solicitud de la emisión del informe legal para persona y/o personalidad juridica</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                <Row className="mb-3">
                    <TextareaForm name="comments" label="Comentarios" register={register} errors={errors} />
                </Row>
                <input type="submit" />
            </form>
        </>
      
    );
}

export default InicioActividadCuatro;