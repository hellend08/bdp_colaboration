import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputForm  from "../../../../../../commons/forms/InputForm";
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

const InicioActividadDos = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>2.- Análisis de la Nota Conceptual  del proyecto considerando el cumplimiento de políticias, salvaguardas ambientales,     criterios de inversión y otros del banco.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                <SelectForm label="Cumplimiento" option="Choose option" />
                <Row>
                    <Col> 
                        <InputForm name="startDate" placeholder="Fecha inicio" type="text" label="" textDecoration="@" register={register} errors={errors} />
                    </Col>
                    <Col> 
                        <InputForm name="endDate" placeholder="Fecha fin" type="text" label="" textDecoration="@" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <InputForm name="observations" placeholder="Observaciones / sugerencias" type="text" label="" textDecoration="" register={register} errors={errors} />
                </Row>
                {/* <input type="submit" /> */}
                <Button type="submit" variant="primary">V</Button>

            </form>
        </>
      
    );
}

export default InicioActividadDos;