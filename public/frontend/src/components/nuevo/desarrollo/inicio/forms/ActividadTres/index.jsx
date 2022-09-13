import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import Inpu  from "../../../../commons/forms/Input";
import Select from "../../../../../commons/forms/Select";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ActividadTresSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';
import { TIPOS_PROPONENTE } from '../../../../../../constants/nuevo/desarrollo/inicio';

const ActividadTres = () => {
  
    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadTresSchema),
        defaultValues: {
            tipoProponente: "",
            areaBDP: "",
        }
    })

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>3.- Revisión del proponente es un área/unidad del banco</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3 gap-4">
                    <Col> 
                        <Select name="tipoProponente" label="Tipo proponente" options={TIPOS_PROPONENTE} register={register} errors={errors}/>
                    </Col>
                    <Col> 
                        <Select name="areaBDP" label="Area BDP" options={["Choose option"]} register={register} errors={errors}/>
                    </Col>
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

export default ActividadTres;