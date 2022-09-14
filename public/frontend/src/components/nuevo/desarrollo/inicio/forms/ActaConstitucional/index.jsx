import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Textarea from '../../../../../commons/forms/Textarea';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { constitucionalActDesaEntity } from "../../../../../../services/actions/project-desarrollo";
import { ActaConstitucionalSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActaConstitucional = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActaConstitucionalSchema),
        defaultValues: {
            problema_proposito: "",
            objetivo: "",
            descripcion_modelo_intervencion: "",
            alcance: "",
            presupuesto: null,
            riesgos_supuestos_restricciones: "",
            gerencia_equipo: "",
            mecanismos_control_cambios: "",
        }
    });

    const onSubmit = data => {
        if(!Object.values(errors).length) {
            console.log("error")
        }
        constitucionalActDesaEntity().POST(data);
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <Row>
                <Col>
                    <Textarea name="problema_proposito" label="Problema y propósito" type="text" register={register} errors={errors} />
                </Col>
                <Col>
                    <Textarea name="objetivo" label="Objetivos" type="text" register={register} errors={errors} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Textarea name="descripcion_modelo_intervencion" label="Descripción del modelo de intervención" type="text" register={register} errors={errors} />
                </Col>
                <Col>
                    <Textarea name="alcance" label="Alcance" type="text" register={register} errors={errors} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Textarea name="presupuesto" label="Presupuesto" type="text" register={register} errors={errors} />
                </Col>
                <Col>
                    <Textarea name="riesgos_supuestos_restricciones" label="Riesgos, supuestos y restricciones" type="text" register={register} errors={errors} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Textarea name="gerencia_equipo" label="Gerencia y equipo" type="text" register={register} errors={errors} />
                </Col>
                <Col>
                    <Textarea name="mecanismos_control_cambios" label="Mecanismos de control de cambios y monitoreo" type="text" register={register} errors={errors} />
                </Col>
            </Row>
            <Row className="d-flex flex-row-reverse pr-3">
                <Button className="btn-sumit" type="submit" variant="primary" >
                    <i className="bi bi-send-fill"></i>
                </Button>
            </Row>
        </form>
    )
}

export default ActaConstitucional;