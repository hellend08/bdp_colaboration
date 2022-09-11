import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ActividadUnoSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio';
import { tabsActividadesStore } from '../../../../../../store/nuevo/desarrollo/inicio';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Input from '../../../../../commons/forms/Input';
import Textarea from '../../../../../commons/forms/Textarea';
import Select from '../../../../../commons/forms/Select';
import Checkbox from '../../../../../commons/forms/Checkbox';
import { validateBtnForm } from '../../../../../../utils/validate-forms';

const ActividadUno = () => {
    const { selectActivity,  enableActivity} = tabsActividadesStore();
    const { register, handleSubmit, formState:{ errors}, getValues } = useForm({
      mode: 'onChange',
      resolver: yupResolver(ActividadUnoSchema),
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
        <Textarea name="descripcion" label="Descripción" register={register} errors={errors}/>
        <Row>
          <p >Datos del proyecto</p>
          <Col xs={6}>
            <Select name="tipo" label="Tipo" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Select name="sector" label="Sector" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Select name="actividadEconomica" label="Actividad económica" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Select name="origen" label="Origen" options="option 1" register={register} errors={errors}/>
          </Col>
          <Select name="cumplimientoODS" label="Cumplimiento de ODS" options="option 1" register={register} errors={errors}/>
          <Textarea name="objetivos" label="Objetivos" register={register} errors={errors}/>
          <Textarea name="justificacion" label="Justificación" register={register} errors={errors}/>
          <Textarea name="enfoque" label="Enfoque" register={register} errors={errors}/>
        </Row>
        <Row >
          <Checkbox name="aceptaComponentesMitigación" label="Componentes de mitigación"register={register} errors={errors}/>
          <Col xs={6}>
            <Select name="areaMitigacion" label="Área de mitigación" options="option 1" register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Input name="mitigacionEstimada" label="Mitigación estimada" placeholder="Ton CO2Eq" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row >
          <Checkbox name="aceptaComponentesAdaptacion" label="Componentes de adaptación" register={register} errors={errors}/>
          <Col xs={6}>
            <Input name="cantBeneficiarios" label="N° de beneficiarios" placeholder={null} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Input name="poblacion" label="Población" placeholder="%" register={register} errors={errors}/>
          </Col>
          <Col xs={6} className="my-3">
            <Input name="costoTotal" label="Costo total" placeholder="USD" register={register} errors={errors}/>
          </Col>
          <Col xs={6} className="my-3">
            <Input name="duracion" label="Duración" placeholder="Días" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row>  
          <Checkbox name="aceptaInstrumentoFinanciero" label="Instrumento financiero" register={register} errors={errors}/>
          <Select name="tipoInstrumentoFinanciero" label="Tipo de instrumento financiero" options="option 1" register={register} errors={errors}/>          
        </Row>
        <Row className="d-flex flex-row-reverse pr-3 mt-4">
          <Button className="btn-sumit" type="submit" variant="primary" >
            <i className="bi bi-send-fill"></i>
          </Button>
        </Row>
      </form>
    );
}
  
export default ActividadUno;