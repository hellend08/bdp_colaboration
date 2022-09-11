import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Textarea from '../../../../../commons/forms/Textarea';
import { ActividadCincoSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio';


const ActividadCinco = () => {
    
    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadCincoSchema),
        defaultValues: {
            comentarios: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p className="mb-0">5.- Elaboración del informe de personería y/o personalidad jurídica</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mt-3">
                    <Textarea name="comentarios" label="Comentarios" type="text" register={register} errors={errors} />
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

export default ActividadCinco;