import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputForm  from "../../../../../../commons/forms/InputForm";
import Row from 'react-bootstrap/Row';

const schema = yup.object({
    comments: yup.string().required(),
  }).required();

const InicioActividadCinco = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">5.- Elaboración del informe de personería y/o personalidad jurídica</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                <Row className="mb-3">
                    <InputForm name="comments" placeholder="Comentarios" type="text" label="" textDecoration="" register={register} errors={errors} />
                </Row>
                <input type="submit" />
            </form>
        </>
      
    );
}

export default InicioActividadCinco;