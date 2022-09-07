import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputForm from '../../../../../commons/forms/InputForm';
import TextareaForm from '../../../../../commons/forms/TextareaForm';
import SelectForm from '../../../../../commons/forms/SelectForm';
import CheckboxForm from '../../../../../commons/forms/CheckboxForm';

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
        <Row>
          <Col xs={12}>
            <CheckboxForm name="aceptaComponentesMitigación" label={null} register={register} errors={errors}/>
            <p className="fs-6">Componentes de mitigación</p>
          </Col>
          <Col>
            <SelectForm name="areaMitigacion" label="Área de mitigación" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col>
            <InputForm name="mitigacionEstimada" label="Mitigación estimada" placeholder="Ton CO2Eq" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CheckboxForm name="aceptaComponentesAdaptacion" label={null} register={register} errors={errors}/>
            <p className="fs-6">Componentes de adaptación</p>
          </Col>
          <Col xs={6}>
            <InputForm name="beneficiarios" label="N° de beneficiarios" placeholder={null} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <InputForm name="poblacion" label="Población" placeholder="%" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <InputForm name="costoTotal" label="Costo total" placeholder="USD" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <InputForm name="duracion" label="Duración" placeholder="Días" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CheckboxForm name="aceptaInstrumentoFinanciero" label={null} register={register} errors={errors}/>
            <p className="fs-6">Instrumento financiero</p>
          </Col>
          <Col xs={12}>
            <SelectForm name="tipoInstrumentoFinanciero" label="Tipo de instrumento financiero" options="option 1" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row>
          <div>
            <Button type="submit" variant="primary">icon</Button>
          </div>
        </Row>
      </form>
    );
}
  
export default InicioActividadUno;