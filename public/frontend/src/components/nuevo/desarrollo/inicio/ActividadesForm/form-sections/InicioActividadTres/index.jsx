import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import InputForm  from "../../../../../commons/forms/InputForm";
import SelectForm from "../../../../../../commons/forms/SelectForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const schema = yup.object({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    observations: yup.string().required(),
    //age: yup.number().positive().integer().required(),
  }).required();

const InicioActividadTres = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>3.- Revisión del proponente es un área/unidad del banco</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                <Row className="mb-3">
                    <Col> 
                        <SelectForm name="tipoProponente" label="Tipo proponente" options="Choose option" register={register} errors={errors}/>
                    </Col>
                    <Col> 
                        <SelectForm name="areaBDP" label="Area BDP" options="Choose option" register={register} errors={errors}/>
                    </Col>
                </Row>
                {/* <input type="submit" /> */}
                <Button type="submit" variant="primary">V</Button>
            </form>
        </>
      
    );
}

export default InicioActividadTres;