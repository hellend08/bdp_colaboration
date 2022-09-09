import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { InicioActividadUnoSchema } from '../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';
import { activitiesStore } from '../../../../../../store/commonsStore';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputForm from '../../../../../commons/forms/InputForm';
import TextareaForm from '../../../../../commons/forms/TextareaForm';
import SelectForm from '../../../../../commons/forms/SelectForm';
import CheckboxForm from '../../../../../commons/forms/CheckboxForm';
import { validateBtnForm } from '../../../../../../utils/validate-forms';

const InicioActividadUno = () => {
    const { selectActivity,  enableActivity} = activitiesStore();
    const { register, handleSubmit, formState:{ errors}, getValues } = useForm({
      mode: 'onChange',
      resolver: yupResolver(InicioActividadUnoSchema),
      defaultValues: {
        descripcion: "",
        tipo: "",
        sector: "",
        actividadEconomica: "",
        origen: "",
        cumplimientoODS: "",
        objetivos: "",
        justificacion: "",
        enfoque: "",
        aceptaComponentesMitigación: "",
        areaMitigacion: "",
        mitigacionEstimada: "",
        aceptaComponentesAdaptacion: "",
        cantBeneficiarios: "",
        poblacion: "",
        costoTotal: "",
        duracion: "",
        aceptaInstrumentoFinanciero: "",
        tipoInstrumentoFinanciero: ""
      }
    });

    const onSubmit = data => {
      if(!Object.values(errors).length) {
        selectActivity("inicio-actividades");
        enableActivity("inicio-actividades")
      }
      console.log(data);
    }
    
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <p>1. Registro del proyecto</p>
        <TextareaForm name="descripcion" label="Descripción" register={register} errors={errors}/>
        <Row>
           <p >Datos del proyecto</p>
          <Col xs={6}>
            <SelectForm name="tipo" label="Tipo" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <SelectForm name="sector" label="Sector" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <SelectForm name="actividadEconomica" label="Actividad económica" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <SelectForm name="origen" label="Origen" options="option 1" register={register} errors={errors}/>
          </Col>
          <SelectForm name="cumplimientoODS" label="Cumplimiento de ODS" options="option 1" register={register} errors={errors}/>
          <TextareaForm name="objetivos" label="Objetivos" register={register} errors={errors}/>
          <TextareaForm name="justificacion" label="Justificación" register={register} errors={errors}/>
          <TextareaForm name="enfoque" label="Enfoque" register={register} errors={errors}/>
        </Row>
        <Row >
          <CheckboxForm name="aceptaComponentesMitigación" label="Componentes de mitigación"register={register} errors={errors}/>
          <Col xs={6}>
            <SelectForm name="areaMitigacion" label="Área de mitigación" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <InputForm name="mitigacionEstimada" label="Mitigación estimada" placeholder="Ton CO2Eq" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row >
          <CheckboxForm name="aceptaComponentesAdaptacion" label="Componentes de adaptación" register={register} errors={errors}/>
          <Col xs={6}>
            <InputForm name="cantBeneficiarios" label="N° de beneficiarios" placeholder={null} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <InputForm name="poblacion" label="Población" placeholder="%" register={register} errors={errors}/>
          </Col>
          <Col xs={6} className="my-3">
            <InputForm name="costoTotal" label="Costo total" placeholder="USD" register={register} errors={errors}/>
          </Col>
          <Col xs={6} className="my-3">
            <InputForm name="duracion" label="Duración" placeholder="Días" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row>  
          <CheckboxForm name="aceptaInstrumentoFinanciero" label="Instrumento financiero" register={register} errors={errors}/>
          <SelectForm name="tipoInstrumentoFinanciero" label="Tipo de instrumento financiero" options="option 1" register={register} errors={errors}/>          
        </Row>
        <Row className="d-flex flex-row-reverse pr-3 mt-4">
          <Button className="btn-sumit" type="submit" variant="primary" >
            <i className="bi bi-send-fill"></i>
          </Button>
        </Row>
      </form>
    );
}
  
export default InicioActividadUno;