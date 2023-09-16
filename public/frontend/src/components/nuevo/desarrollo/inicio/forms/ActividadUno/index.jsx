import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ActividadUnoSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';
import { tabsActividadesStore } from '../../../../../../store/commons';
import { 
  TIPOS_PROYECTO, SECTORES_PROYECTO, ACTIVIDADES_ECONOMICAS,
  LISTA_ORIGEN_PROYECTO, CUMPLIMIENTOS_ODS, TIPOS_INSTRUMENTO_FINANCIERO,
  AREAS_RESULTADO
} from '../../../../../../constants/nuevo/desarrollo/inicio';
import { projectDesaEntity } from '../../../../../../services/actions/project-desarrollo'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Input from '../../../../../commons/forms/Input';
// import Textarea from '../../../../../commons/forms/Textarea';
// import Select from '../../../../../commons/forms/Select';
// import Checkbox from '../../../../../commons/forms/Checkbox';
// import InputFile from "../../../../../commons/forms/InputFile";
// import { validateBtnForm } from '../../../../../../utils/validate-forms';

const ActividadUno = () => {
    const { selectActivity,  enableActivity} = tabsActividadesStore();
    const { register, handleSubmit, formState:{ errors}, getValues } = useForm({
      mode: 'onChange',
      resolver: yupResolver(ActividadUnoSchema),
      defaultValues: {
        descripcion: "",
        tipo_id: null,
        sector_id: null,
        actividad_economica_id: null,
        origen_id: null,
        cumplimiento_ods_id: null,
        objetivo: "",
        justificacion: "",
        enfoque: "",
        //aceptaComponentesMitigación: "",
        area_mitigacion_id: null,
        mitigacion_estimada: "",
        //aceptaComponentesAdaptacion: "",
        n_beneficiarios: null,
        poblacion: "",
        costo_total: null,
        duracion: "",
        //aceptaInstrumentoFinanciero: "",
        tipo_instrumento_financiero_id: null
      }
    });

    const onSubmit = data => {
      if(!Object.values(errors).length) {
        selectActivity("inicio-actividades");
        enableActivity("inicio-actividades")
      }
      projectDesaEntity().POST(data);
    }


    
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <p>1. Registro del proyecto</p>
        {/* <Textarea name="descripcion" label="Descripción" register={register} errors={errors}/>
        <Row>
          <p>Datos del proyecto</p>
          <Col xs={6}>
            <Select name="tipo_id" label="Tipo" options={TIPOS_PROYECTO} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Select name="sector_id" label="Sector" options={SECTORES_PROYECTO} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Select name="actividad_economica_id" label="Actividad económica" options={ACTIVIDADES_ECONOMICAS} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Select name="origen_id" label="Origen" options={LISTA_ORIGEN_PROYECTO} register={register} errors={errors}/>
          </Col>
          <Select name="cumplimiento_ods_id" label="Cumplimiento de ODS" options={CUMPLIMIENTOS_ODS} register={register} errors={errors}/>
          <Textarea name="objetivo" label="Objetivos" register={register} errors={errors}/>
          <Textarea name="justificacion" label="Justificación" register={register} errors={errors}/>
          <Textarea name="enfoque" label="Enfoque" register={register} errors={errors}/>
        </Row>
        <Row >
          <Checkbox name="aceptaComponentesMitigación" label="Componentes de mitigación"register={register} errors={errors}/>
          <Col xs={6}>
            <Select name="area_mitigacion_id" label="Área de mitigación" options={AREAS_RESULTADO} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Input name="mitigacionEstimada" label="Mitigación estimada" placeholder="Ton CO2Eq" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row >
          <Checkbox name="aceptaComponentesAdaptacion" label="Componentes de adaptación" register={register} errors={errors}/>
          <Col xs={6}>
            <Input name="n_beneficiarios" label="N° de beneficiarios" placeholder={null} register={register} errors={errors}/>
          </Col>
          <Col xs={6}>
            <Input name="poblacion" label="Población" placeholder="%" register={register} errors={errors}/>
          </Col>
          <Col xs={6} className="my-3">
            <Input name="costo_total" label="Costo total" placeholder="USD" register={register} errors={errors}/>
          </Col>
          <Col xs={6} className="my-3">
            <Input name="duracion" label="Duración" placeholder="Días" register={register} errors={errors}/>
          </Col>
        </Row>
        <Row>  
          <Checkbox name="aceptaInstrumentoFinanciero" label="Instrumento financiero" register={register} errors={errors}/>
          <Select name="tipo_instrumento_financiero_id" label="Tipo de instrumento financiero" options={TIPOS_INSTRUMENTO_FINANCIERO} register={register} errors={errors}/>          
        </Row>
        <Row>
          <p>Documentos de respaldo</p>
          <Col>
            <InputFile label="Documento de No objeción" />
          </Col>
          <Col>
            <InputFile label="Propuesta física" />
          </Col>
        </Row>
        <Row className="d-flex flex-row-reverse pr-3 mt-4">
          <Button className="btn-sumit" type="submit" variant="primary" >
            <i className="bi bi-send-fill"></i>
          </Button>
        </Row> */}
      </form>
    );
}
  
export default ActividadUno;