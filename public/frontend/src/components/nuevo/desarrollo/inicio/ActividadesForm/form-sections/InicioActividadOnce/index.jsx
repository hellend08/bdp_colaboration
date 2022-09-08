import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SelectForm from "../../../../../../commons/forms/SelectForm";

const schema = yup.object({
    observations: yup.string().required(),
    //age: yup.number().positive().integer().required(),
  }).required();

const InicioActividadOnce = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>11.- Recepción por parte del Financiador de la aprobación de la Nota Conceptual</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3">
                    <SelectForm name="cumplimiento" label="Aprobación" options="Choose option" register={register} errors={errors}/>
                </Row>
                {/* <input type="submit" /> */}
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                    <i className="bi bi-send-fill"></i>

                    </Button>

                </Row>

            </form>
        </>
    );
}

export default InicioActividadOnce;