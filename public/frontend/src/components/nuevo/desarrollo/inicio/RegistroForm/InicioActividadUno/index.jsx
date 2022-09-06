import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputForm from '../../../../../commons/forms/InputForm';
import TextareaForm from '../../../../../commons/forms/TextareaForm';
import SelectForm from '../../../../../commons/forms/SelectForm';

const schema = yup.object({
  descripcion: yup.string().required(),
  //age: yup.number().positive().integer().required(),
}).required();

const InicioActividadUno = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextareaForm name="descripcion" label="Descripción" register={register} errors={errors}/>
        <p className="fs-6">Datos del proyecto</p>
        <Row>
          <Col>
            <SelectForm name="tipo" label="Tipo" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col>
            <SelectForm name="sector" label="Sector" options="option 1" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <SelectForm name="actividadEconomica" label="Actividad económica" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col>
            <SelectForm name="origen" label="Origen" options="option 1" register={register} errors={errors}/>
          </Col>
        </Row>
        <SelectForm name="cumplimientoODS" label="Cumplimiento de ODS" options="option 1" register={register} errors={errors}/>
        <TextareaForm name="objetivos" label="Objetivos" register={register} errors={errors}/>
        <TextareaForm name="justificacion" label="Justificación" register={register} errors={errors}/>
        <TextareaForm name="enfoque" label="Enfoque" register={register} errors={errors}/>
        <Button type="submit" variant="primary">Primary</Button>
      </form>
    );
}
  
export default InicioActividadUno;