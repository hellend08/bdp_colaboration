import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputForm  from "../../../../../../commons/forms/InputForm";
import SelectForm from "../../../../../../commons/forms/SelectForm";
import TextareaForm from '../../../../../../commons/forms/TextareaForm';

const schema = yup.object({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    observations: yup.string().required(),
    //age: yup.number().positive().integer().required(),
  }).required();

const InicioActividadDos = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>2.- Análisis de la Nota Conceptual  del proyecto considerando el cumplimiento de políticias, salvaguardas ambientales,     criterios de inversión y otros del banco.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                <SelectForm name="cumplimiento" label="Cumplimiento" options="Choose option" register={register} errors={errors}/>
                <Row>
                    <Col> 
                        <InputForm name="startDate" label="Fecha inicio" type="text" placeholder="icono date" register={register} errors={errors} />
                    </Col>
                    <Col> 
                        <InputForm name="endDate" label="Fecha fin" type="text"  placeholder="icono date" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <TextareaForm name="observations" label="Observaciones / sugerencias" register={register} errors={errors} />
                </Row>
                <input type="submit" />
            </form>
        </>
      
    );
}

export default InicioActividadDos;