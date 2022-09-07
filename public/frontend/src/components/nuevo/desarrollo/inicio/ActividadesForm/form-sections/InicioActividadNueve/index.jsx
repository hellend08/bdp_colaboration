import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import InputForm  from "../../../../../../commons/forms/InputForm";
import SelectForm from "../../../../../../commons/forms/SelectForm";
import TextareaForm from '../../../../../../commons/forms/TextareaForm';

const schema = yup.object({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    observations: yup.string().required(),
    //age: yup.number().positive().integer().required(),
  }).required();

const InicioActividadNueve = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>9.- Evaluación y recomendación de aprobación a Directorio</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <SelectForm name="cumplimiento" label="Observaciones" options="Choose option" register={register} errors={errors}/>
                {/* <Row className="my-3 gap-4">
                    <Col> 
                        <InputForm name="startDate" label="Fecha inicio" type="date" placeholder="icono date" register={register} errors={errors} />
                    </Col>
                    <Col> 
                        <InputForm name="endDate" label="Fecha fin" type="date"  placeholder="icono date" register={register} errors={errors} />
                    </Col>
                </Row> */}
                <Row className="mt-3">
                    <TextareaForm name="observations" label="Recomendaciones" register={register} errors={errors} />
                </Row>
                {/* <input type="submit" /> */}
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="w-25" type="submit" variant="primary">V</Button>

                </Row>

            </form>
        </>
      
    );
}

export default InicioActividadNueve;