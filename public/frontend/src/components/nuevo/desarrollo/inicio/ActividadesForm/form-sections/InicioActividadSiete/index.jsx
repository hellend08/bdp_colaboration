import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import TextareaForm from '../../../../../../commons/forms/TextareaForm';
import { InicioActividadSieteSchema } from '../../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';


const InicioActividadSiete = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(InicioActividadSieteSchema),
        defaultValues: {
            comentarios: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">7.- Elaboración del informe para la aprobación de la Nota Conceptual para su presentación al Comité</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <TextareaForm name="comentarios" label="Comentarios" type="text" register={register} errors={errors} />
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

export default InicioActividadSiete;