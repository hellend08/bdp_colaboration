import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SelectForm from "../../../../../../commons/forms/SelectForm";

const schema = yup.object({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    observations: yup.string().required(),
    //age: yup.number().positive().integer().required(),
  }).required();

const InicioActividadVeinticinco = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>25.- Aprobación del Acta de Constitución y designación de Responsable del Proyecto</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3">
                    <SelectForm name="cumplimiento" label="Cumplimiento" options="Choose option" register={register} errors={errors}/>
                </Row>
                {/* <input type="submit" /> */}
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="w-25" type="submit" variant="primary">V</Button>

                </Row>

            </form>
        </>
    );
}

export default InicioActividadVeinticinco;