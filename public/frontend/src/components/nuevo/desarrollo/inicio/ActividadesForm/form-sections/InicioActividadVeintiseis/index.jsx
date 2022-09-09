import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SelectForm from "../../../../../../commons/forms/SelectForm";
import { InicioActividadVeintiseisSchema } from '../../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';


const InicioActividadVeintiseis = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(InicioActividadVeintiseisSchema),
        defaultValues: {
            cumplimiento: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>26.- Rechazo de la Nota Conceptual. Comunicar al proponente los motivos del rechazo</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3">
                    <SelectForm name="cumplimiento" label="Cumplimiento" options="Choose option" register={register} errors={errors}/>
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

export default InicioActividadVeintiseis;