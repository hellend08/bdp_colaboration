import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SelectForm from "../../../../../../commons/forms/SelectForm";
import TextareaForm from '../../../../../../commons/forms/TextareaForm';
import { InicioActividadQuinceSchema } from '../../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';


const InicioActividadQuince = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(InicioActividadQuinceSchema),
        defaultValues: {
            observacion: "",
            recomendacion: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>15.- Evaluación del informe legal y contrato con el Financiador y emisión de recomendación para aprobación de Directorio</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <SelectForm name="observacion" label="Observaciones" options="Choose option" register={register} errors={errors}/>
                {/* <Row className="my-3 gap-4">
                    <Col> 
                        <InputForm name="startDate" label="Fecha inicio" type="date" placeholder="icono date" register={register} errors={errors} />
                    </Col>
                    <Col> 
                        <InputForm name="endDate" label="Fecha fin" type="date"  placeholder="icono date" register={register} errors={errors} />
                    </Col>
                </Row> */}
                <Row className="mt-3">
                    <TextareaForm name="recomendacion" label="Recomendaciones" register={register} errors={errors} />
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

export default InicioActividadQuince;